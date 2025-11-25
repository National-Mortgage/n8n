import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

import { ariveApiRequest, ariveApiRequestAllItems } from './GenericFunctions';
import { loanFields, loanOperations } from './LoanDescription';

export class Arive implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Arive',
		name: 'arive',
		icon: 'file:arive.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Arive API - Mortgage loan origination system',
		defaults: {
			name: 'Arive',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'ariveApi',
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
						name: 'Loan',
						value: 'loan',
					},
				],
				default: 'loan',
			},
			...loanOperations,
			...loanFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const length = items.length;
		let responseData;

		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		for (let i = 0; i < length; i++) {
			try {
				if (resource === 'loan') {
					// *********************************************************************
					//                             loan
					// *********************************************************************

					if (operation === 'create') {
						// ----------------------------------
						//         loan: create
						// ----------------------------------

						const originatorEmail = this.getNodeParameter('originatorEmail', i) as string;
						const loanPurpose = this.getNodeParameter('loanPurpose', i) as string;
						const borrowerFirstName = this.getNodeParameter('borrowerFirstName', i) as string;
						const borrowerLastName = this.getNodeParameter('borrowerLastName', i) as string;
						const borrowerEmail = this.getNodeParameter('borrowerEmail', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i);

						// Build loanBorrowers array - required format for Arive API
						const loanBorrowers: IDataObject[] = [
							{
								applicantType: 'Borrower',
								borrowerPairLoanAppSequence: 1,
								firstName: borrowerFirstName,
								lastName: borrowerLastName,
								emailAddressText: borrowerEmail,
							},
						];

						// Add phone if provided
						if (additionalFields.borrowerPhone) {
							loanBorrowers[0].mobilePhone10digit = additionalFields.borrowerPhone;
						}

						// Add co-borrower if provided
						if (additionalFields.coBorrowerFirstName && additionalFields.coBorrowerLastName) {
							loanBorrowers.push({
								applicantType: 'CoBorrower',
								borrowerPairLoanAppSequence: 1,
								firstName: additionalFields.coBorrowerFirstName,
								lastName: additionalFields.coBorrowerLastName,
								emailAddressText: additionalFields.coBorrowerEmail || '',
							});
						}

						const body: IDataObject = {
							originatorEmail,
							loanPurpose,
							loanBorrowers,
						};

						// Add optional fields
						if (additionalFields.baseLoanAmount) {
							body.baseLoanAmount = additionalFields.baseLoanAmount;
						}

						if (additionalFields.purchasePriceOrEstimatedValue) {
							body.purchasePriceOrEstimatedValue = additionalFields.purchasePriceOrEstimatedValue;
						}

						if (additionalFields.mortgageType) {
							body.mortgageType = additionalFields.mortgageType;
						}

						// Add subject property if any address fields are provided
						if (
							additionalFields.propertyAddressLine ||
							additionalFields.propertyCity ||
							additionalFields.propertyState ||
							additionalFields.propertyPostalCode
						) {
							body.subjectProperty = {
								addressLineText: additionalFields.propertyAddressLine || '',
								city: additionalFields.propertyCity || '',
								state: additionalFields.propertyState || '',
								postalCode: additionalFields.propertyPostalCode || '',
							};
						}

						responseData = await ariveApiRequest.call(this, 'POST', '/api/loans', body);
					} else if (operation === 'get') {
						// ----------------------------------
						//         loan: get
						// ----------------------------------

						const loanId = this.getNodeParameter('loanId', i) as string;
						responseData = await ariveApiRequest.call(this, 'GET', `/api/loans/${loanId}`);
					} else if (operation === 'getAll') {
						// ----------------------------------
						//         loan: getAll
						// ----------------------------------

						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);
						const qs: IDataObject = {};

						// Add search parameters
						if (filters.searchField && filters.searchValue) {
							qs.searchField = filters.searchField;
							qs.searchValue = filters.searchValue;
						}

						// Add ordering
						if (filters.orderBy) {
							qs.orderBy = filters.orderBy;
						}

						if (filters.sort) {
							qs.sort = filters.sort;
						}

						if (returnAll) {
							responseData = await ariveApiRequestAllItems.call(
								this,
								'rows',
								'GET',
								'/api/loans',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.offset = 0;
							const response = await ariveApiRequest.call(this, 'GET', '/api/loans', {}, qs);
							responseData = response.rows || [];
						}
					} else if (operation === 'update') {
						// ----------------------------------
						//         loan: update
						// ----------------------------------

						const loanId = this.getNodeParameter('loanId', i) as string;
						const stage = this.getNodeParameter('stage', i) as string;
						const stageDate = this.getNodeParameter('stageDate', i) as string;

						const body: IDataObject = {
							loanStages: [
								{
									stage,
									stageDate,
									current: true,
								},
							],
						};

						responseData = await ariveApiRequest.call(this, 'PATCH', `/api/loans/${loanId}`, body);
					} else if (operation === 'adverse') {
						// ----------------------------------
						//         loan: adverse
						// ----------------------------------

						const loanId = this.getNodeParameter('loanId', i) as string;
						const adverseDate = this.getNodeParameter('adverseDate', i) as string;
						const reason = this.getNodeParameter('reason', i) as string;

						const body: IDataObject = {
							adverseDate,
							reason,
						};

						responseData = await ariveApiRequest.call(
							this,
							'PATCH',
							`/api/loans/${loanId}/adverse`,
							body,
						);
					} else {
						throw new NodeOperationError(
							this.getNode(),
							`The operation "${operation}" is not supported!`,
							{ itemIndex: i },
						);
					}
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push.apply(returnData, executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					const executionErrorData = this.helpers.constructExecutionMetaData(
						this.helpers.returnJsonArray({ error: error.message }),
						{ itemData: { item: i } },
					);
					returnData.push.apply(returnData, executionErrorData);
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
