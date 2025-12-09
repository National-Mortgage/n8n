import type {
	IExecuteFunctions,
	IDataObject,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	INodeTypeBaseDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

import type { Subscriber } from './MailerLite.Interface';
import { subscriberFields, subscriberOperations } from './SubscriberDescription';
import { groupFields, groupOperations } from './GroupDescription';
import { fieldFields, fieldOperations } from './FieldDescription';
import { segmentFields, segmentOperations } from './SegmentDescription';
import { automationFields, automationOperations } from './AutomationDescription';
import {
	getCustomFields,
	mailerliteApiRequest,
	mailerliteApiRequestAllItems,
} from '../GenericFunctions';

export class MailerLiteV2 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			displayName: 'MailerLite',
			name: 'mailerLite',
			group: ['input'],
			version: [2],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Consume Mailer Lite API',
			defaults: {
				name: 'MailerLite',
			},
			usableAsTool: true,
			inputs: [NodeConnectionTypes.Main],
			outputs: [NodeConnectionTypes.Main],
			credentials: [
				{
					name: 'mailerLiteApi',
					required: true,
				},
			],
			properties: [
				{
					displayName: 'Resource',
					name: 'resource',
					type: 'options',
					noDataExpression: true,
					options: [
						{
							name: 'Automation',
							value: 'automation',
						},
						{
							name: 'Field',
							value: 'field',
						},
						{
							name: 'Group',
							value: 'group',
						},
						{
							name: 'Segment',
							value: 'segment',
						},
						{
							name: 'Subscriber',
							value: 'subscriber',
						},
					],
					default: 'subscriber',
				},
				...subscriberOperations,
				...subscriberFields,
				...groupOperations,
				...groupFields,
				...fieldOperations,
				...fieldFields,
				...segmentOperations,
				...segmentFields,
				...automationOperations,
				...automationFields,
			],
		};
	}

	methods = {
		loadOptions: {
			getCustomFields,
			async getGroups(this: ILoadOptionsFunctions) {
				const { getGroups } = await import('../GenericFunctions');
				return getGroups.call(this);
			},
			async getSegments(this: ILoadOptionsFunctions) {
				const { getSegments } = await import('../GenericFunctions');
				return getSegments.call(this);
			},
			async getAutomations(this: ILoadOptionsFunctions) {
				const { getAutomations } = await import('../GenericFunctions');
				return getAutomations.call(this);
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		const qs: IDataObject = {};
		let responseData;
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);
		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'subscriber') {
					//https://developers.mailerlite.com/reference#create-a-subscriber
					if (operation === 'create') {
						const email = this.getNodeParameter('email', i) as string;

						const additionalFields = this.getNodeParameter('additionalFields', i);

						const body: IDataObject = {
							email,
						};

						Object.assign(body, additionalFields);

						if (additionalFields.customFieldsUi) {
							const customFieldsValues = (additionalFields.customFieldsUi as IDataObject)
								.customFieldsValues as IDataObject[];

							if (customFieldsValues && customFieldsValues.length > 0) {
								const fields = {};

								for (const customFieldValue of customFieldsValues) {
									//@ts-ignore
									fields[customFieldValue.fieldId] = customFieldValue.value;
								}

								body.fields = fields;
							}
							delete body.customFieldsUi;
						}

						if (additionalFields.groups) {
							body.groups = additionalFields.groups;
						}

						if (additionalFields.resubscribe !== undefined) {
							body.resubscribe = additionalFields.resubscribe;
						}

						responseData = await mailerliteApiRequest.call(this, 'POST', '/subscribers', body);
						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#delete-subscriber
					if (operation === 'delete') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						await mailerliteApiRequest.call(this, 'DELETE', `/subscribers/${subscriberId}`);

						responseData = { success: true };
					}
					//https://developers.mailerlite.com/reference#forget-subscriber
					if (operation === 'forget') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						responseData = await mailerliteApiRequest.call(
							this,
							'POST',
							`/subscribers/${subscriberId}/forget`,
						);

						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#single-subscriber
					if (operation === 'get') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						responseData = await mailerliteApiRequest.call(
							this,
							'GET',
							`/subscribers/${subscriberId}`,
						);

						responseData = responseData.data as Subscriber[];
					}
					//https://developers.mailerlite.com/reference#subscriber-activity
					if (operation === 'getActivity') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.log_name) {
							qs['filter[log_name]'] = filters.log_name as string;
						}

						if (returnAll) {
							qs.limit = 100;
							let page = 1;
							const allActivity = [];

							do {
								qs.page = page;
								const response = await mailerliteApiRequest.call(
									this,
									'GET',
									`/subscribers/${subscriberId}/activity-log`,
									{},
									qs,
								);

								const activities = response.data || [];
								allActivity.push(...activities);

								if (!response.links?.next || activities.length === 0) {
									break;
								}

								page++;
							} while (true);

							responseData = allActivity;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.page = 1;
							const response = await mailerliteApiRequest.call(
								this,
								'GET',
								`/subscribers/${subscriberId}/activity-log`,
								{},
								qs,
							);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#subscribers
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);

						const filters = this.getNodeParameter('filters', i);

						if (filters.status) {
							qs['filter[status]'] = filters.status as string;
						}

						if (returnAll) {
							responseData = await mailerliteApiRequestAllItems.call(
								this,
								'GET',
								'/subscribers',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i);

							responseData = await mailerliteApiRequest.call(this, 'GET', '/subscribers', {}, qs);
							responseData = responseData.data;
						}
					}
					//https://developers.mailerlite.com/reference#update-subscriber
					if (operation === 'update') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;

						const additionalFields = this.getNodeParameter('additionalFields', i);

						const body: IDataObject = {};

						Object.assign(body, additionalFields);

						if (additionalFields.customFieldsUi) {
							const customFieldsValues = (additionalFields.customFieldsUi as IDataObject)
								.customFieldsValues as IDataObject[];

							if (customFieldsValues) {
								const fields = {};

								for (const customFieldValue of customFieldsValues) {
									//@ts-ignore
									fields[customFieldValue.fieldId] = customFieldValue.value;
								}

								body.fields = fields;
								delete body.customFieldsUi;
							}
						}

						if (additionalFields.groups) {
							body.groups = additionalFields.groups;
						}

						responseData = await mailerliteApiRequest.call(
							this,
							'PUT',
							`/subscribers/${subscriberId}`,
							body,
						);

						responseData = responseData.data;
					}
				}

				if (resource === 'group') {
					//https://developers.mailerlite.com/reference#create-group
					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;

						const body: IDataObject = { name };

						responseData = await mailerliteApiRequest.call(this, 'POST', '/groups', body);
						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#delete-group
					if (operation === 'delete') {
						const groupId = this.getNodeParameter('groupId', i) as string;

						await mailerliteApiRequest.call(this, 'DELETE', `/groups/${groupId}`);

						responseData = { success: true };
					}
					//https://developers.mailerlite.com/reference#single-group
					if (operation === 'get') {
						const groupId = this.getNodeParameter('groupId', i) as string;

						responseData = await mailerliteApiRequest.call(this, 'GET', `/groups/${groupId}`);

						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#groups
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.name) {
							qs['filter[name]'] = filters.name as string;
						}

						if (filters.sort) {
							qs.sort = filters.sort as string;
						}

						if (returnAll) {
							qs.limit = 100;
							let page = 1;
							const allGroups = [];

							do {
								qs.page = page;
								const response = await mailerliteApiRequest.call(this, 'GET', '/groups', {}, qs);

								const groups = response.data || [];
								allGroups.push(...groups);

								if (!response.links?.next || groups.length === 0) {
									break;
								}

								page++;
							} while (true);

							responseData = allGroups;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.page = 1;

							const response = await mailerliteApiRequest.call(this, 'GET', '/groups', {}, qs);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#group-subscribers
					if (operation === 'getSubscribers') {
						const groupId = this.getNodeParameter('groupId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.status) {
							qs['filter[status]'] = filters.status as string;
						}

						if (returnAll) {
							responseData = await mailerliteApiRequestAllItems.call(
								this,
								'GET',
								`/groups/${groupId}/subscribers`,
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i);

							const response = await mailerliteApiRequest.call(
								this,
								'GET',
								`/groups/${groupId}/subscribers`,
								{},
								qs,
							);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#update-group
					if (operation === 'update') {
						const groupId = this.getNodeParameter('groupId', i) as string;
						const name = this.getNodeParameter('name', i) as string;

						const body: IDataObject = { name };

						responseData = await mailerliteApiRequest.call(this, 'PUT', `/groups/${groupId}`, body);

						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#assign-subscriber-to-group
					if (operation === 'assignSubscriber') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;
						const groupId = this.getNodeParameter('groupId', i) as string;

						responseData = await mailerliteApiRequest.call(
							this,
							'POST',
							`/subscribers/${subscriberId}/groups/${groupId}`,
						);

						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#unassign-subscriber-from-group
					if (operation === 'unassignSubscriber') {
						const subscriberId = this.getNodeParameter('subscriberId', i) as string;
						const groupId = this.getNodeParameter('groupId', i) as string;

						await mailerliteApiRequest.call(
							this,
							'DELETE',
							`/subscribers/${subscriberId}/groups/${groupId}`,
						);

						responseData = { success: true };
					}
				}

				if (resource === 'field') {
					//https://developers.mailerlite.com/reference#create-field
					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;
						const type = this.getNodeParameter('type', i) as string;

						const body: IDataObject = { name, type };

						responseData = await mailerliteApiRequest.call(this, 'POST', '/fields', body);
						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#delete-field
					if (operation === 'delete') {
						const fieldId = this.getNodeParameter('fieldId', i) as string;

						await mailerliteApiRequest.call(this, 'DELETE', `/fields/${fieldId}`);

						responseData = { success: true };
					}
					//https://developers.mailerlite.com/reference#fields
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.keyword) {
							qs['filter[keyword]'] = filters.keyword as string;
						}

						if (filters.type) {
							qs['filter[type]'] = filters.type as string;
						}

						if (filters.sort) {
							qs.sort = filters.sort as string;
						}

						if (returnAll) {
							qs.limit = 100;
							let page = 1;
							const allFields = [];

							do {
								qs.page = page;
								const response = await mailerliteApiRequest.call(this, 'GET', '/fields', {}, qs);

								const fields = response.data || [];
								allFields.push(...fields);

								if (!response.links?.next || fields.length === 0) {
									break;
								}

								page++;
							} while (true);

							responseData = allFields;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.page = 1;

							const response = await mailerliteApiRequest.call(this, 'GET', '/fields', {}, qs);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#update-field
					if (operation === 'update') {
						const fieldId = this.getNodeParameter('fieldId', i) as string;
						const name = this.getNodeParameter('name', i) as string;

						const body: IDataObject = { name };

						responseData = await mailerliteApiRequest.call(this, 'PUT', `/fields/${fieldId}`, body);

						responseData = responseData.data;
					}
				}

				if (resource === 'segment') {
					//https://developers.mailerlite.com/reference#delete-segment
					if (operation === 'delete') {
						const segmentId = this.getNodeParameter('segmentId', i) as string;

						await mailerliteApiRequest.call(this, 'DELETE', `/segments/${segmentId}`);

						responseData = { success: true };
					}
					//https://developers.mailerlite.com/reference#segments
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);

						if (returnAll) {
							qs.limit = 250;
							let page = 1;
							const allSegments = [];

							do {
								qs.page = page;
								const response = await mailerliteApiRequest.call(this, 'GET', '/segments', {}, qs);

								const segments = response.data || [];
								allSegments.push(...segments);

								if (!response.links?.next || segments.length === 0) {
									break;
								}

								page++;
							} while (true);

							responseData = allSegments;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.page = 1;

							const response = await mailerliteApiRequest.call(this, 'GET', '/segments', {}, qs);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#segment-subscribers
					if (operation === 'getSubscribers') {
						const segmentId = this.getNodeParameter('segmentId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.status) {
							qs['filter[status]'] = filters.status as string;
						}

						if (returnAll) {
							responseData = await mailerliteApiRequestAllItems.call(
								this,
								'GET',
								`/segments/${segmentId}/subscribers`,
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i);

							const response = await mailerliteApiRequest.call(
								this,
								'GET',
								`/segments/${segmentId}/subscribers`,
								{},
								qs,
							);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#update-segment
					if (operation === 'update') {
						const segmentId = this.getNodeParameter('segmentId', i) as string;
						const name = this.getNodeParameter('name', i) as string;

						const body: IDataObject = { name };

						responseData = await mailerliteApiRequest.call(
							this,
							'PUT',
							`/segments/${segmentId}`,
							body,
						);

						responseData = responseData.data;
					}
				}

				if (resource === 'automation') {
					//https://developers.mailerlite.com/reference#create-draft-automation
					if (operation === 'create') {
						const name = this.getNodeParameter('name', i) as string;

						const body: IDataObject = { name };

						responseData = await mailerliteApiRequest.call(this, 'POST', '/automations', body);
						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#delete-automation
					if (operation === 'delete') {
						const automationId = this.getNodeParameter('automationId', i) as string;

						await mailerliteApiRequest.call(this, 'DELETE', `/automations/${automationId}`);

						responseData = { success: true };
					}
					//https://developers.mailerlite.com/reference#single-automation
					if (operation === 'get') {
						const automationId = this.getNodeParameter('automationId', i) as string;

						responseData = await mailerliteApiRequest.call(
							this,
							'GET',
							`/automations/${automationId}`,
						);

						responseData = responseData.data;
					}
					//https://developers.mailerlite.com/reference#automation-activity
					if (operation === 'getActivity') {
						const automationId = this.getNodeParameter('automationId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.status) {
							qs['filter[status]'] = filters.status as string;
						}

						if (filters.date_from) {
							qs['filter[date_from]'] = filters.date_from as string;
						}

						if (filters.date_to) {
							qs['filter[date_to]'] = filters.date_to as string;
						}

						if (filters.scheduled_from) {
							qs['filter[scheduled_from]'] = filters.scheduled_from as string;
						}

						if (filters.scheduled_to) {
							qs['filter[scheduled_to]'] = filters.scheduled_to as string;
						}

						if (filters.search) {
							qs['filter[search]'] = filters.search as string;
						}

						if (returnAll) {
							qs.limit = 100;
							let page = 1;
							const allActivity = [];

							do {
								qs.page = page;
								const response = await mailerliteApiRequest.call(
									this,
									'GET',
									`/automations/${automationId}/activity`,
									{},
									qs,
								);

								const activities = response.data || [];
								allActivity.push(...activities);

								if (!response.links?.next || activities.length === 0) {
									break;
								}

								page++;
							} while (true);

							responseData = allActivity;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.page = 1;

							const response = await mailerliteApiRequest.call(
								this,
								'GET',
								`/automations/${automationId}/activity`,
								{},
								qs,
							);
							responseData = response.data || [];
						}
					}
					//https://developers.mailerlite.com/reference#automations
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);

						if (filters.enabled !== undefined && filters.enabled !== '') {
							qs['filter[enabled]'] = filters.enabled;
						}

						if (filters.name) {
							qs['filter[name]'] = filters.name as string;
						}

						if (filters.group) {
							qs['filter[group]'] = filters.group as string;
						}

						if (returnAll) {
							qs.limit = 100;
							let page = 1;
							const allAutomations = [];

							do {
								qs.page = page;
								const response = await mailerliteApiRequest.call(
									this,
									'GET',
									'/automations',
									{},
									qs,
								);

								const automations = response.data || [];
								allAutomations.push(...automations);

								if (!response.links?.next || automations.length === 0) {
									break;
								}

								page++;
							} while (true);

							responseData = allAutomations;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.page = 1;

							const response = await mailerliteApiRequest.call(this, 'GET', '/automations', {}, qs);
							responseData = response.data || [];
						}
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push(...executionErrorData);
					continue;
				}
				throw error;
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData as IDataObject[]),
				{ itemData: { item: i } },
			);

			returnData.push(...executionData);
		}

		return [returnData];
	}
}
