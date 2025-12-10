import { DateTime } from 'luxon';
import { NodeApiError, NodeConnectionTypes } from 'n8n-workflow';
import type {
	IDataObject,
	IPollFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	ILoadOptionsFunctions,
	INodePropertyOptions,
	JsonObject,
} from 'n8n-workflow';

import {
	getQuery,
	salesforceApiRequest,
	salesforceApiRequestAllItems,
	sortOptions,
	getPollStartDate,
	filterAndManageProcessedItems,
	getFieldsForObject,
	getAllObjects,
	detectFieldChanges,
} from './GenericFunctions';

export class SalesforceTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Salesforce Trigger',
		name: 'salesforceTrigger',
		icon: 'file:salesforce.svg',
		group: ['trigger'],
		version: 1,
		description:
			'Fetches data from Salesforce and starts the workflow on specified polling intervals.',
		subtitle: '={{($parameter["triggerOn"])}}',
		defaults: {
			name: 'Salesforce Trigger',
		},
		credentials: [
			{
				name: 'salesforceOAuth2Api',
				required: true,
			},
		],
		polling: true,
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		properties: [
			{
				displayName: 'Trigger On',
				name: 'triggerOn',
				description: 'Which Salesforce event should trigger the node',
				type: 'options',
				default: '',
				options: [
					{
						name: 'Account Created',
						value: 'accountCreated',
						description: 'When a new account is created',
					},
					{
						name: 'Account Updated',
						value: 'accountUpdated',
						description: 'When an existing account is modified',
					},
					{
						name: 'Attachment Created',
						value: 'attachmentCreated',
						description: 'When a file is uploaded and attached to an object',
					},
					{
						name: 'Attachment Updated',
						value: 'attachmentUpdated',
						description: 'When an existing file is modified',
					},
					{
						name: 'Case Created',
						value: 'caseCreated',
						description: 'When a new case is created',
					},
					{
						name: 'Case Updated',
						value: 'caseUpdated',
						description: 'When an existing case is modified',
					},
					{
						name: 'Contact Created',
						value: 'contactCreated',
						description: 'When a new contact is created',
					},
					{
						name: 'Contact Updated',
						value: 'contactUpdated',
						description: 'When an existing contact is modified',
					},
					{
						name: 'Custom Object Created',
						value: 'customObjectCreated',
						description: 'When a new object of a given type is created',
					},
					{
						name: 'Custom Object Updated',
						value: 'customObjectUpdated',
						description: 'When an object of a given type is modified',
					},
					{
						name: 'Lead Created',
						value: 'leadCreated',
						description: 'When a new lead is created',
					},
					{
						name: 'Lead Updated',
						value: 'leadUpdated',
						description: 'When an existing lead is modified',
					},
					{
						name: 'Opportunity Created',
						value: 'opportunityCreated',
						description: 'When a new opportunity is created',
					},
					{
						name: 'Opportunity Updated',
						value: 'opportunityUpdated',
						description: 'When an existing opportunity is modified',
					},
					{
						name: 'Record Field Updated',
						value: 'recordFieldUpdated',
						description: 'When a specific field on any Salesforce record is updated',
					},
					{
						name: 'Task Created',
						value: 'taskCreated',
						description: 'When a new task is created',
					},
					{
						name: 'Task Updated',
						value: 'taskUpdated',
						description: 'When an existing task is modified',
					},
					{
						name: 'User Created',
						value: 'userCreated',
						description: 'When a new user is created',
					},
					{
						name: 'User Updated',
						value: 'userUpdated',
						description: 'When an existing user is modified',
					},
				],
			},
			{
				displayName: 'Custom Object Name or ID',
				name: 'customObject',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCustomObjects',
				},
				required: true,
				default: '',
				displayOptions: {
					show: {
						triggerOn: ['customObjectUpdated', 'customObjectCreated'],
					},
				},
				description:
					'Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Object',
				name: 'object',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getAllObjects',
				},
				required: true,
				default: '',
				displayOptions: {
					show: {
						triggerOn: ['recordFieldUpdated'],
					},
				},
				description:
					'The Salesforce object to watch (e.g., Opportunity, Lead, Contact). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Field to Watch',
				name: 'fieldToWatch',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getFieldsForObject',
					loadOptionsDependsOn: ['object'],
				},
				required: true,
				default: '',
				displayOptions: {
					show: {
						triggerOn: ['recordFieldUpdated'],
					},
				},
				description:
					'The specific field to watch for changes (e.g., AriveId__c, StageName). Trigger will only fire when THIS field changes. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Options',
				name: 'options',
				type: 'collection',
				placeholder: 'Add Option',
				default: {},
				displayOptions: {
					show: {
						triggerOn: ['recordFieldUpdated'],
					},
				},
				options: [
					{
						displayName: 'Watch Multiple Fields',
						name: 'watchMultipleFields',
						type: 'boolean',
						default: false,
						description: 'Whether to watch multiple fields instead of just one',
					},
					{
						displayName: 'Additional Fields',
						name: 'additionalFields',
						type: 'multiOptions',
						typeOptions: {
							loadOptionsMethod: 'getFieldsForObject',
							loadOptionsDependsOn: ['object'],
						},
						default: [],
						displayOptions: {
							show: {
								watchMultipleFields: [true],
							},
						},
						description:
							'Additional fields to watch. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
					},
					{
						displayName: 'Field Match Logic',
						name: 'fieldMatchLogic',
						type: 'options',
						options: [
							{
								name: 'ANY Field Changed (OR)',
								value: 'or',
								description: 'Trigger if any of the watched fields changed',
							},
							{
								name: 'ALL Fields Changed (AND)',
								value: 'and',
								description: 'Trigger only if all watched fields changed',
							},
						],
						default: 'or',
						displayOptions: {
							show: {
								watchMultipleFields: [true],
							},
						},
						description: 'How to match multiple field changes',
					},
				],
			},
		],
	};

	methods = {
		loadOptions: {
			// Get all the custom objects recurrence instances to display them to user so that they can
			// select them easily
			async getCustomObjects(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const returnData: INodePropertyOptions[] = [];
				// TODO: find a way to filter this object to get just the lead sources instead of the whole object
				const { sobjects: objects } = await salesforceApiRequest.call(this, 'GET', '/sobjects');
				for (const object of objects) {
					if (object.custom === true) {
						const objectName = object.label;
						const objectId = object.name;
						returnData.push({
							name: objectName,
							value: objectId,
						});
					}
				}
				sortOptions(returnData);
				return returnData;
			},
			// Get all Salesforce objects (standard + custom)
			async getAllObjects(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				return await getAllObjects.call(this);
			},
			// Get all fields for a specific Salesforce object
			async getFieldsForObject(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const objectName = this.getNodeParameter('object') as string;
				return await getFieldsForObject.call(this, objectName);
			},
		},
	};

	async poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null> {
		const workflowData: {
			processedIds?: string[];
			lastTimeChecked?: string;
			fieldSnapshots?: Record<string, IDataObject>;
		} = this.getWorkflowStaticData('node');
		let responseData;
		const qs: IDataObject = {};
		const triggerOn = this.getNodeParameter('triggerOn') as string;
		let triggerResource = triggerOn.slice(0, 1).toUpperCase() + triggerOn.slice(1, -7);
		const changeType = triggerOn.slice(-7);

		// Handle Record Field Updated trigger type
		if (triggerOn === 'recordFieldUpdated') {
			triggerResource = this.getNodeParameter('object') as string;
		} else if (triggerResource === 'CustomObject') {
			triggerResource = this.getNodeParameter('customObject') as string;
		}

		const endDate = DateTime.now().toISO();

		if (!workflowData.processedIds) {
			workflowData.processedIds = [];
		}
		const processedIds = workflowData.processedIds;

		try {
			const pollStartDate = getPollStartDate(workflowData.lastTimeChecked);
			const pollEndDate = endDate;

			const options = {
				conditionsUi: {
					conditionValues: [] as IDataObject[],
				},
			};
			if (this.getMode() !== 'manual') {
				if (changeType === 'Created') {
					options.conditionsUi.conditionValues.push({
						field: 'CreatedDate',
						operation: '>=',
						value: pollStartDate,
					});
					options.conditionsUi.conditionValues.push({
						field: 'CreatedDate',
						operation: '<',
						value: pollEndDate,
					});
				} else {
					options.conditionsUi.conditionValues.push({
						field: 'LastModifiedDate',
						operation: '>=',
						value: pollStartDate,
					});
					options.conditionsUi.conditionValues.push({
						field: 'LastModifiedDate',
						operation: '<',
						value: pollEndDate,
					});
					// make sure the resource wasn't just created.
					options.conditionsUi.conditionValues.push({
						field: 'CreatedDate',
						operation: '<',
						value: pollStartDate,
					});
				}
			}

			try {
				if (this.getMode() === 'manual') {
					qs.q = getQuery(options, triggerResource, false, 1);
				} else {
					qs.q = getQuery(options, triggerResource, true);
				}
				responseData = await salesforceApiRequestAllItems.call(
					this,
					'records',
					'GET',
					'/query',
					{},
					qs,
				);
			} catch (error) {
				throw new NodeApiError(this.getNode(), error as JsonObject);
			}

			if (!responseData?.length) {
				workflowData.lastTimeChecked = endDate;
				return null;
			}

			// Handle field-level change detection for recordFieldUpdated trigger
			if (triggerOn === 'recordFieldUpdated') {
				if (!workflowData.fieldSnapshots) {
					workflowData.fieldSnapshots = {};
				}

				const fieldToWatch = this.getNodeParameter('fieldToWatch') as string;
				const options = this.getNodeParameter('options', {}) as IDataObject;
				const watchMultipleFields = options.watchMultipleFields as boolean;
				const additionalFields = (options.additionalFields as string[]) || [];
				const fieldMatchLogic = (options.fieldMatchLogic as 'and' | 'or') || 'or';

				// Build list of fields to watch
				const fieldsToWatch = [fieldToWatch];
				if (watchMultipleFields && additionalFields.length > 0) {
					fieldsToWatch.push(...additionalFields);
				}

				// Filter records where watched field(s) actually changed
				const recordsWithFieldChanges: IDataObject[] = [];

				for (const record of responseData) {
					const recordId = record.Id as string;
					if (!recordId) continue;

					const previousSnapshot = workflowData.fieldSnapshots[recordId];
					const fieldChanged = detectFieldChanges(
						record,
						previousSnapshot,
						fieldsToWatch,
						fieldMatchLogic,
					);

					if (fieldChanged) {
						recordsWithFieldChanges.push(record);
					}

					// Update snapshot for this record
					const newSnapshot: IDataObject = {};
					for (const field of fieldsToWatch) {
						newSnapshot[field] = record[field];
					}
					workflowData.fieldSnapshots[recordId] = newSnapshot;
				}

				// Clean up old snapshots (keep only last 1000 records)
				const snapshotKeys = Object.keys(workflowData.fieldSnapshots);
				if (snapshotKeys.length > 1000) {
					const keysToRemove = snapshotKeys.slice(0, snapshotKeys.length - 1000);
					for (const key of keysToRemove) {
						delete workflowData.fieldSnapshots[key];
					}
				}

				workflowData.lastTimeChecked = endDate;

				if (recordsWithFieldChanges.length > 0) {
					return [this.helpers.returnJsonArray(recordsWithFieldChanges)];
				}

				return null;
			}

			// Original logic for non-field-specific triggers
			const { newItems, updatedProcessedIds } = filterAndManageProcessedItems(
				responseData,
				processedIds,
			);

			workflowData.processedIds = updatedProcessedIds;
			workflowData.lastTimeChecked = endDate;

			if (newItems.length > 0) {
				return [this.helpers.returnJsonArray(newItems as IDataObject[])];
			}

			return null;
		} catch (error) {
			if (this.getMode() === 'manual' || !workflowData.lastTimeChecked) {
				throw error;
			}
			const workflow = this.getWorkflow();
			const node = this.getNode();
			this.logger.error(
				`There was a problem in '${node.name}' node in workflow '${workflow.id}': '${error.description}'`,
				{
					node: node.name,
					workflowId: workflow.id,
					error,
				},
			);
			throw error;
		}
	}
}
