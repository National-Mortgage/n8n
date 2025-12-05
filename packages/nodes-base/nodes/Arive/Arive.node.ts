import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes, NodeOperationError } from 'n8n-workflow';

import { ariveApiRequest, ariveApiRequestAllItems } from './GenericFunctions';
import { leadFields, leadOperations } from './LeadDescription';
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
						name: 'Lead',
						value: 'lead',
					},
					{
						name: 'Loan',
						value: 'loan',
					},
				],
				default: 'loan',
			},
			...leadOperations,
			...loanOperations,
			...leadFields,
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
				if (resource === 'lead') {
					// *********************************************************************
					//                             lead
					// *********************************************************************

					if (operation === 'create') {
						// ----------------------------------
						//         lead: create
						// ----------------------------------

						const assigneeEmail = this.getNodeParameter('assigneeEmail', i) as string;
						const loanPurpose = this.getNodeParameter('loanPurpose', i) as string;
						const borrowerFirstName = this.getNodeParameter('borrowerFirstName', i) as string;
						const borrowerLastName = this.getNodeParameter('borrowerLastName', i) as string;
						const borrowerEmail = this.getNodeParameter('borrowerEmail', i) as string;
						const additionalFields = this.getNodeParameter('additionalFields', i);

						const borrower: IDataObject = {
							firstName: borrowerFirstName,
							lastName: borrowerLastName,
							emailAddressText: borrowerEmail,
						};

						// Add optional borrower fields
						if (additionalFields.borrowerBirthDate) {
							borrower.birthDate = additionalFields.borrowerBirthDate;
						}
						if (additionalFields.borrowerMobilePhone) {
							borrower.mobilePhone10digit = additionalFields.borrowerMobilePhone;
						}
						if (additionalFields.borrowerSsn) {
							borrower.ssn = additionalFields.borrowerSsn;
						}
						if (additionalFields.borrowerMilitaryServiceType) {
							borrower.militaryServiceType = additionalFields.borrowerMilitaryServiceType;
						}
						if (additionalFields.borrowerEmploymentType) {
							borrower.employmentType = additionalFields.borrowerEmploymentType;
						}
						if (additionalFields.borrowerHasRealEstate !== undefined) {
							borrower.hasRealEstate = additionalFields.borrowerHasRealEstate;
						}
						if (additionalFields.borrowerAnnualIncome) {
							borrower.annualIncome = additionalFields.borrowerAnnualIncome;
						}
						if (additionalFields.borrowerTotalLiability) {
							borrower.totalLiability = additionalFields.borrowerTotalLiability;
						}
						if (additionalFields.borrowerFirstTimeHomeBuyer !== undefined) {
							borrower.firstTimeHomeBuyer = additionalFields.borrowerFirstTimeHomeBuyer;
						}
						if (additionalFields.borrowerYearsSinceForeclosure) {
							borrower.yearsSinceForeclosure = additionalFields.borrowerYearsSinceForeclosure;
						}
						if (additionalFields.borrowerYearsSinceBankruptcy) {
							borrower.yearsSinceBankruptcy = additionalFields.borrowerYearsSinceBankruptcy;
						}
						if (additionalFields.borrowerCurrentlyOwningAHome !== undefined) {
							borrower.currentlyOwningAHome = additionalFields.borrowerCurrentlyOwningAHome;
						}
						if (additionalFields.borrowerPlanningToSellItBeforeBuying !== undefined) {
							borrower.planningToSellItBeforeBuying =
								additionalFields.borrowerPlanningToSellItBeforeBuying;
						}
						if (additionalFields.borrowerNoContactRequest !== undefined) {
							borrower.noContactRequest = additionalFields.borrowerNoContactRequest;
						}
						if (additionalFields.borrowerEmailOptOut !== undefined) {
							borrower.emailOptOut = additionalFields.borrowerEmailOptOut;
						}
						if (additionalFields.borrowerSmsOptOut !== undefined) {
							borrower.smsOptOut = additionalFields.borrowerSmsOptOut;
						}
						if (additionalFields.borrowerOccupancy) {
							borrower.occupancy = additionalFields.borrowerOccupancy;
						}
						if (additionalFields.borrowerMonthlyRentAmt) {
							borrower.monthlyRentAmt = additionalFields.borrowerMonthlyRentAmt;
						}
						if (additionalFields.borrowerHasCoBorrower !== undefined) {
							borrower.hasCoBorrower = additionalFields.borrowerHasCoBorrower;
						}
						if (additionalFields.borrowerDurationMonthsCount) {
							borrower.durationMonthsCount = additionalFields.borrowerDurationMonthsCount;
						}
						if (additionalFields.borrowerDurationYearsCount) {
							borrower.durationYearsCount = additionalFields.borrowerDurationYearsCount;
						}

						const body: IDataObject = {
							assigneeEmail,
							loanPurpose,
							borrower,
						};

						// Add optional top-level fields
						const optionalFields = [
							'leadSource',
							'otherSourceDesc',
							'homebuyingStage',
							'refinanceType',
							'cashoutPurpose',
							'mortgageType',
							'baseLoanAmount',
							'purchasePriceOrEstimatedValue',
							'estimatedHOIMonthly',
							'estimatedPropertyTaxesMonthly',
							'estimatedAssociationDuesMonthly',
							'estimatedFICO',
							'amortizationType',
							'noteRate',
							'qualifyingRate',
							'term',
							'interestOnly',
							'InterestOnlyTerm',
							'lienPosition',
							'InitialFixedPeriodEffectiveMonthsCount',
							'NormalRateAdjustmentPeriod',
							'desiredMonthlyPayment',
							'impoundWaiver',
							'currentInterestRateRefi',
							'propertyType',
							'propertyUsageType',
							'leadStatus',
							'leadLostReason',
							'subjectTBDIndicator',
							'crmReferenceId',
							'leadProvidedBy',
						];

						for (const field of optionalFields) {
							if (additionalFields[field] !== undefined && additionalFields[field] !== '') {
								body[field] = additionalFields[field];
							}
						}

						// Add subject property if any fields provided
						if (
							additionalFields.propertyLineText ||
							additionalFields.propertyCity ||
							additionalFields.propertyState ||
							additionalFields.propertyPostalCode ||
							additionalFields.propertyCounty ||
							additionalFields.propertyUnitId
						) {
							const subjectProperty: IDataObject = {};
							if (additionalFields.propertyLineText) {
								subjectProperty.lineText = additionalFields.propertyLineText;
							}
							if (additionalFields.propertyCity) {
								subjectProperty.city = additionalFields.propertyCity;
							}
							if (additionalFields.propertyCounty) {
								subjectProperty.county = additionalFields.propertyCounty;
							}
							if (additionalFields.propertyPostalCode) {
								subjectProperty.postalCode = additionalFields.propertyPostalCode;
							}
							if (additionalFields.propertyState) {
								subjectProperty.state = additionalFields.propertyState;
							}
							if (additionalFields.propertyUnitId) {
								subjectProperty.unitId = additionalFields.propertyUnitId;
							}
							body.subjectProperty = subjectProperty;
						}

						// Add co-borrower if provided
						if (additionalFields.coBorrowerFirstName && additionalFields.coBorrowerLastName) {
							const coBorrower: IDataObject = {
								firstName: additionalFields.coBorrowerFirstName,
								lastName: additionalFields.coBorrowerLastName,
								emailAddressText: additionalFields.coBorrowerEmail || '',
							};
							if (additionalFields.coBorrowerBirthDate) {
								coBorrower.birthDate = additionalFields.coBorrowerBirthDate;
							}
							if (additionalFields.coBorrowerCellPhone) {
								coBorrower.cellPhone = additionalFields.coBorrowerCellPhone;
							}
							if (additionalFields.coBorrowerSsn) {
								coBorrower.ssn = additionalFields.coBorrowerSsn;
							}
							if (additionalFields.coBorrowerMilitaryServiceType) {
								coBorrower.militaryServiceType = additionalFields.coBorrowerMilitaryServiceType;
							}
							body.coBorrower = coBorrower;
						}

						responseData = await ariveApiRequest.call(this, 'POST', '/api/leads', body);
					} else if (operation === 'get') {
						// ----------------------------------
						//         lead: get
						// ----------------------------------

						const leadId = this.getNodeParameter('leadId', i) as string;
						responseData = await ariveApiRequest.call(this, 'GET', `/api/leads/${leadId}`);
					} else if (operation === 'getAll') {
						// ----------------------------------
						//         lead: getAll
						// ----------------------------------

						const returnAll = this.getNodeParameter('returnAll', i);
						const filters = this.getNodeParameter('filters', i);
						const qs: IDataObject = {};

						// Add filters
						if (filters.leadSource) {
							qs.leadSource = filters.leadSource;
						}
						if (filters.loanPurpose) {
							qs.loanPurpose = filters.loanPurpose;
						}
						if (filters.loanType) {
							qs.loanType = filters.loanType;
						}
						if (filters.status) {
							qs.status = filters.status;
						}
						if (filters.orderBy) {
							qs.orderBy = filters.orderBy;
						}
						if (filters.sort) {
							qs.sort = filters.sort;
						}

						if (returnAll) {
							// Leads endpoint returns array directly, not paginated with rows
							qs.limit = 100;
							qs.offset = 0;
							const allLeads = [];
							let hasMore = true;

							while (hasMore) {
								const response = await ariveApiRequest.call(this, 'GET', '/api/leads', {}, qs);
								if (Array.isArray(response) && response.length > 0) {
									allLeads.push(...response);
									qs.offset = (qs.offset as number) + (qs.limit as number);
									if (response.length < (qs.limit as number)) {
										hasMore = false;
									}
								} else {
									hasMore = false;
								}
							}
							responseData = allLeads;
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.offset = 0;
							responseData = await ariveApiRequest.call(this, 'GET', '/api/leads', {}, qs);
						}
					} else if (operation === 'update') {
						// ----------------------------------
						//         lead: update
						// ----------------------------------

						const leadId = this.getNodeParameter('leadId', i) as string;
						const updateFields = this.getNodeParameter('updateFields', i);

						const body: IDataObject = {};

						// Add all update fields
						const allowedFields = [
							'leadSource',
							'otherSourceDesc',
							'homebuyingStage',
							'refinanceType',
							'cashoutPurpose',
							'mortgageType',
							'baseLoanAmount',
							'purchasePriceOrEstimatedValue',
							'estimatedHOIMonthly',
							'estimatedPropertyTaxesMonthly',
							'estimatedAssociationDuesMonthly',
							'estimatedFICO',
							'amortizationType',
							'noteRate',
							'qualifyingRate',
							'term',
							'interestOnly',
							'InterestOnlyTerm',
							'lienPosition',
							'InitialFixedPeriodEffectiveMonthsCount',
							'NormalRateAdjustmentPeriod',
							'desiredMonthlyPayment',
							'impoundWaiver',
							'currentInterestRateRefi',
							'propertyType',
							'propertyUsageType',
							'leadStatus',
							'leadLostReason',
							'subjectTBDIndicator',
							'crmReferenceId',
							'leadProvidedBy',
							'assigneeEmail',
							'loanPurpose',
						];

						for (const field of allowedFields) {
							if (updateFields[field] !== undefined && updateFields[field] !== '') {
								body[field] = updateFields[field];
							}
						}

						// Handle borrower fields if provided
						if (
							updateFields.borrowerFirstName ||
							updateFields.borrowerLastName ||
							updateFields.borrowerEmail
						) {
							const borrower: IDataObject = {};
							if (updateFields.borrowerFirstName) {
								borrower.firstName = updateFields.borrowerFirstName;
							}
							if (updateFields.borrowerLastName) {
								borrower.lastName = updateFields.borrowerLastName;
							}
							if (updateFields.borrowerEmail) {
								borrower.emailAddressText = updateFields.borrowerEmail;
							}
							body.borrower = borrower;
						}

						responseData = await ariveApiRequest.call(this, 'PATCH', `/api/leads/${leadId}`, body);
					} else if (operation === 'convert') {
						// ----------------------------------
						//         lead: convert
						// ----------------------------------

						const leadId = this.getNodeParameter('leadId', i) as string;
						const loanOfficerEmail = this.getNodeParameter('loanOfficerEmail', i) as string;

						const body: IDataObject = {
							loanOfficerEmail,
						};

						responseData = await ariveApiRequest.call(
							this,
							'POST',
							`/api/leads/${leadId}/leadtoloan`,
							body,
						);
					} else {
						throw new NodeOperationError(
							this.getNode(),
							`The operation "${operation}" is not supported!`,
							{ itemIndex: i },
						);
					}
				} else if (resource === 'loan') {
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
						const primaryBorrower: IDataObject = {
							applicantType: 'Borrower',
							borrowerPairLoanAppSequence: 1,
							firstName: borrowerFirstName,
							lastName: borrowerLastName,
							emailAddressText: borrowerEmail,
						};

						// Add optional borrower fields
						if (additionalFields.borrowerMiddleName) {
							primaryBorrower.middleName = additionalFields.borrowerMiddleName;
						}
						if (additionalFields.borrowerMobilePhone) {
							primaryBorrower.mobilePhone10digit = additionalFields.borrowerMobilePhone;
						}

						const loanBorrowers: IDataObject[] = [primaryBorrower];

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

						// Add all optional loan-level fields
						const optionalFields = [
							'baseLoanAmount',
							'cashoutPurpose',
							'crmReferenceId',
							'currentInterestRateRefi',
							'estimatedAssociationDuesMonthly',
							'estimatedFICO',
							'estimatedHOIMonthly',
							'estimatedPropertyTaxesMonthly',
							'externalCreateDate',
							'homebuyingStage',
							'leadSource',
							'mortgageType',
							'propertyType',
							'propertyUsageType',
							'purchasePriceOrEstimatedValue',
							'refinanceType',
							'subjectTBDIndicator',
						];

						for (const field of optionalFields) {
							if (additionalFields[field] !== undefined && additionalFields[field] !== '') {
								body[field] = additionalFields[field];
							}
						}

						// Add subject property if any address fields are provided
						if (
							additionalFields.propertyAddressLine ||
							additionalFields.propertyCity ||
							additionalFields.propertyState ||
							additionalFields.propertyPostalCode ||
							additionalFields.propertyCounty ||
							additionalFields.propertyUnit
						) {
							const subjectProperty: IDataObject = {};
							if (additionalFields.propertyAddressLine) {
								subjectProperty.addressLineText = additionalFields.propertyAddressLine;
							}
							if (additionalFields.propertyUnit) {
								subjectProperty.addressUnitIdentifier = additionalFields.propertyUnit;
							}
							if (additionalFields.propertyCity) {
								subjectProperty.city = additionalFields.propertyCity;
							}
							if (additionalFields.propertyCounty) {
								subjectProperty.county = additionalFields.propertyCounty;
							}
							if (additionalFields.propertyState) {
								subjectProperty.state = additionalFields.propertyState;
							}
							if (additionalFields.propertyPostalCode) {
								subjectProperty.postalCode = additionalFields.propertyPostalCode;
							}
							body.subjectProperty = subjectProperty;
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
						const additionalFields = this.getNodeParameter('additionalFields', i);

						const body: IDataObject = {
							adverseDate,
							reason,
						};

						// Add all optional adverse fields
						if (additionalFields.denialReasons) {
							body.denialReasons = additionalFields.denialReasons;
						}
						if (additionalFields.withdrawnReason) {
							body.withdrawnReason = additionalFields.withdrawnReason;
						}
						if (additionalFields.decisionBasedOnCredit !== undefined) {
							body.decisionBasedOnCredit = additionalFields.decisionBasedOnCredit;
						}
						if (additionalFields.decisionBasedOnOutsideSource !== undefined) {
							body.decisionBasedOnOutsideSource = additionalFields.decisionBasedOnOutsideSource;
						}
						if (additionalFields.decisionBasedOnOtherDesc) {
							body.decisionBasedOnOtherDesc = additionalFields.decisionBasedOnOtherDesc;
						}
						if (additionalFields.deliveryType) {
							body.deliveryType = additionalFields.deliveryType;
						}
						if (additionalFields.deliveryDate) {
							body.deliveryDate = additionalFields.deliveryDate;
						}

						responseData = await ariveApiRequest.call(
							this,
							'PATCH',
							`/api/loans/${loanId}/adverse`,
							body,
						);
					} else if (operation === 'getCreditInfo') {
						// ----------------------------------
						//         loan: getCreditInfo
						// ----------------------------------

						const loanId = this.getNodeParameter('loanId', i) as string;
						responseData = await ariveApiRequest.call(
							this,
							'GET',
							`/api/loans/${loanId}/additionalInfo`,
						);
					} else if (operation === 'getREO') {
						// ----------------------------------
						//         loan: getREO
						// ----------------------------------

						const loanId = this.getNodeParameter('loanId', i) as string;
						const returnAll = this.getNodeParameter('returnAll', i);
						const qs: IDataObject = {};

						if (returnAll) {
							responseData = await ariveApiRequestAllItems.call(
								this,
								'rows',
								'GET',
								`/api/loans/${loanId}/REO`,
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i);
							qs.offset = 0;
							const response = await ariveApiRequest.call(
								this,
								'GET',
								`/api/loans/${loanId}/REO`,
								{},
								qs,
							);
							responseData = response.rows || [];
						}
					} else if (operation === 'updateKeyDates') {
						// ----------------------------------
						//         loan: updateKeyDates
						// ----------------------------------

						const loanId = this.getNodeParameter('loanId', i) as string;
						const keyDates = this.getNodeParameter('keyDates', i) as IDataObject;

						const body: IDataObject = {};

						// Add all key dates that were provided
						const dateFields = [
							'appraisalContingency',
							'appraisalDeliveryDate',
							'appraisalOrderedDate',
							'closingContingency',
							'dateToAvoidEPO',
							'estFirstPaymentDate',
							'firstPaymentDate',
							'hoiOrderedDate',
							'hoiReceivedDate',
							'initialCDSentDate',
							'initialCDSignedDate',
							'initialLESentDate',
							'initialLESignedDate',
							'intentToProceedDate',
							'loanContingency',
							'mostRecentCDSentDate',
							'mostRecentCDSignedDate',
							'mostRecentLESentDate',
							'mostRecentLESignedDate',
							'preApprovalExpiryDate',
							'taxTranscriptOrderedDate',
							'taxTranscriptReceivedDate',
							'titleOrderedDate',
							'titleReceivedDate',
							'tridDate',
						];

						for (const field of dateFields) {
							if (keyDates[field]) {
								body[field] = keyDates[field];
							}
						}

						responseData = await ariveApiRequest.call(
							this,
							'PATCH',
							`/api/loans/${loanId}/key-dates`,
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
