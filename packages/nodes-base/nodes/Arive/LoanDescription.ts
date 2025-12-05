import type { INodeProperties } from 'n8n-workflow';

export const loanOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['loan'],
			},
		},
		options: [
			{
				name: 'Adverse',
				value: 'adverse',
				description: 'Mark loan as adversed',
				action: 'Adverse a loan',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new loan',
				action: 'Create a loan',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get loan details',
				action: 'Get loan details',
			},
			{
				name: 'Get Credit Info',
				value: 'getCreditInfo',
				description: 'Get borrower credit scores',
				action: 'Get credit info',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Search many loans',
				action: 'Get many loans',
			},
			{
				name: 'Get REO Info',
				value: 'getREO',
				description: 'Get real estate owned information',
				action: 'Get REO info',
			},
			{
				name: 'Update Key Dates',
				value: 'updateKeyDates',
				description: 'Update loan milestone dates',
				action: 'Update key dates',
			},
			{
				name: 'Update Status',
				value: 'update',
				description: 'Update loan stage',
				action: 'Update loan status',
			},
		],
		default: 'create',
	},
];

export const loanFields: INodeProperties[] = [
	// ----------------------------------
	//         loan:create
	// ----------------------------------
	{
		displayName: 'Loan Originator Email',
		name: 'originatorEmail',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Email of the primary loan officer',
	},
	{
		displayName: 'Loan Purpose',
		name: 'loanPurpose',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'Purchase',
				value: 'Purchase',
			},
			{
				name: 'Refinance',
				value: 'Refinance',
			},
		],
		default: 'Purchase',
		description: 'Purpose of the loan',
	},
	{
		displayName: 'Borrower First Name',
		name: 'borrowerFirstName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'First name of the primary borrower',
	},
	{
		displayName: 'Borrower Last Name',
		name: 'borrowerLastName',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Last name of the primary borrower',
	},
	{
		displayName: 'Borrower Email',
		name: 'borrowerEmail',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Email address of the primary borrower',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Base Loan Amount',
				name: 'baseLoanAmount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Borrower Middle Name',
				name: 'borrowerMiddleName',
				type: 'string',
				default: '',
				description: 'Middle name of the primary borrower',
			},
			{
				displayName: 'Borrower Mobile Phone',
				name: 'borrowerMobilePhone',
				type: 'string',
				default: '',
				description: 'Borrower mobile phone (10 digits)',
			},
			{
				displayName: 'Cashout Purpose',
				name: 'cashoutPurpose',
				type: 'options',
				options: [
					{ name: 'Debt Consolidation', value: 'DebtConsolidation' },
					{ name: 'Education', value: 'Education' },
					{ name: 'Home Improvement', value: 'HomeImprovement' },
					{ name: 'Interest Rate Reduction', value: 'InterestRateReductionOther' },
					{ name: 'Other', value: 'Other' },
				],
				default: 'DebtConsolidation',
				description: 'Purpose of cashout (required if refinance type is CashOut)',
			},
			{
				displayName: 'Co-Borrower Email',
				name: 'coBorrowerEmail',
				type: 'string',
				default: '',
				description: 'Email address of the co-borrower',
			},
			{
				displayName: 'Co-Borrower First Name',
				name: 'coBorrowerFirstName',
				type: 'string',
				default: '',
				description: 'First name of the co-borrower',
			},
			{
				displayName: 'Co-Borrower Last Name',
				name: 'coBorrowerLastName',
				type: 'string',
				default: '',
				description: 'Last name of the co-borrower',
			},
			{
				displayName: 'CRM Reference ID',
				name: 'crmReferenceId',
				type: 'string',
				default: '',
				description: 'External CRM reference identifier',
			},
			{
				displayName: 'Current Interest Rate (Refi)',
				name: 'currentInterestRateRefi',
				type: 'number',
				default: 0,
				description: 'Current interest rate for refinance loans',
			},
			{
				displayName: 'Estimated Association Dues Monthly',
				name: 'estimatedAssociationDuesMonthly',
				type: 'string',
				default: '',
				description: 'Estimated monthly HOA dues',
			},
			{
				displayName: 'Estimated FICO',
				name: 'estimatedFICO',
				type: 'string',
				default: '',
				description: 'Estimated loan FICO score',
			},
			{
				displayName: 'Estimated HOI Monthly',
				name: 'estimatedHOIMonthly',
				type: 'string',
				default: '',
				description: 'Estimated monthly homeowners insurance amount',
			},
			{
				displayName: 'Estimated Property Taxes Monthly',
				name: 'estimatedPropertyTaxesMonthly',
				type: 'string',
				default: '',
				description: 'Estimated monthly property taxes',
			},
			{
				displayName: 'External Create Date',
				name: 'externalCreateDate',
				type: 'string',
				default: '',
				description: 'Application creation date from external system',
			},
			{
				displayName: 'Homebuying Stage',
				name: 'homebuyingStage',
				type: 'options',
				options: [
					{ name: 'Found A House Or Offer Pending', value: 'FOUND_A_HOUSE_OR_OFFER_PENDING' },
					{ name: 'Getting Started', value: 'GETTING_STARTED' },
					{ name: 'Making Offers', value: 'MAKING_OFFERS' },
					{ name: 'Under Contract', value: 'UNDER_CONTRACT' },
				],
				default: 'GETTING_STARTED',
				description: 'Current stage in the homebuying process',
			},
			{
				displayName: 'Lead Source',
				name: 'leadSource',
				type: 'string',
				default: '',
				description: 'Source of the lead',
			},
			{
				displayName: 'Mortgage Type',
				name: 'mortgageType',
				type: 'options',
				options: [
					{ name: 'Conventional', value: 'Conventional' },
					{ name: 'FHA', value: 'FHA' },
					{ name: 'HELOAN', value: 'HELOAN' },
					{ name: 'HELOC', value: 'HELOC' },
					{ name: 'Non-QM', value: 'Non-QM' },
					{ name: 'REVERSE', value: 'REVERSE' },
					{ name: 'USDA', value: 'USDA' },
					{ name: 'VA', value: 'VA' },
				],
				default: 'Conventional',
				description: 'Type of mortgage loan',
			},
			{
				displayName: 'Property City',
				name: 'propertyCity',
				type: 'string',
				default: '',
				description: 'Subject property city',
			},
			{
				displayName: 'Property County',
				name: 'propertyCounty',
				type: 'string',
				default: '',
				description: 'Subject property county',
			},
			{
				displayName: 'Property Postal Code',
				name: 'propertyPostalCode',
				type: 'string',
				default: '',
				description: 'Subject property postal code',
			},
			{
				displayName: 'Property State',
				name: 'propertyState',
				type: 'string',
				default: '',
				description: 'Subject property state',
			},
			{
				displayName: 'Property Street Address',
				name: 'propertyAddressLine',
				type: 'string',
				default: '',
				description: 'Subject property street address',
			},
			{
				displayName: 'Property Type',
				name: 'propertyType',
				type: 'options',
				options: [
					{ name: 'Co-Op (5-8 Stories)', value: 'COOP_5_8_STORIES' },
					{ name: 'Co-Op (Over 8 Stories)', value: 'COOP_OVER_8_STORIES' },
					{ name: 'Co-Op (Under 5 Stories)', value: 'COOP_UNDER_5_STORIES' },
					{ name: 'Condo', value: 'CONDO' },
					{ name: 'Condo (5-8 Stories)', value: 'CONDO_5_8_STORIES' },
					{ name: 'Condo (Over 8 Stories)', value: 'CONDO_OVER_8_STORIES' },
					{ name: 'Condo (Under 5 Stories)', value: 'CONDO_UNDER_5_STORIES' },
					{ name: 'Condotel', value: 'CONDOTEL' },
					{ name: 'Detached Condo', value: 'DETACHED_CONDO' },
					{ name: 'Four Unit', value: 'FOUR_UNIT' },
					{ name: 'Manufactured Double Wide', value: 'MANUFACTURED_DOUBLE_WIDE' },
					{ name: 'Manufactured Single Wide', value: 'MANUFACTURED_SINGLE_WIDE' },
					{ name: 'Mixed Use Property', value: 'MIXED_USE_PROPERTY' },
					{ name: 'PUD', value: 'PUD' },
					{ name: 'Single Family Attached', value: 'SINGLE_FAMILY_ATTACHED' },
					{ name: 'Single Family Detached', value: 'SINGLE_FAMILY_DETACHED' },
					{ name: 'Site Condo', value: 'SITE_CONDO' },
					{ name: 'Three Unit', value: 'THREE_UNIT' },
					{ name: 'Townhouse', value: 'TOWNHOUSE' },
					{ name: 'Two Unit', value: 'TWO_UNIT' },
					{ name: 'Vacant Lot / Land', value: 'VACANT_LOT_LAND' },
				],
				default: 'SINGLE_FAMILY_DETACHED',
				description: 'Type of property',
			},
			{
				displayName: 'Property Unit',
				name: 'propertyUnit',
				type: 'string',
				default: '',
				description: 'Subject property unit identifier',
			},
			{
				displayName: 'Property Usage Type',
				name: 'propertyUsageType',
				type: 'options',
				options: [
					{ name: 'Investment', value: 'Investment' },
					{ name: 'Primary Residence', value: 'PrimaryResidence' },
					{ name: 'Second Home', value: 'SecondHome' },
				],
				default: 'PrimaryResidence',
				description: 'How the property will be used',
			},
			{
				displayName: 'Purchase Price / Estimated Value',
				name: 'purchasePriceOrEstimatedValue',
				type: 'number',
				default: 0,
				description: 'Purchase price or estimated property value',
			},
			{
				displayName: 'Refinance Type',
				name: 'refinanceType',
				type: 'options',
				options: [
					{ name: 'Cash Out', value: 'CashOut' },
					{ name: 'Limited Cash Out', value: 'LimitedCashOut' },
					{ name: 'No Cash Out', value: 'NoCashOut' },
				],
				default: 'NoCashOut',
				description: 'Type of refinance (required if loan purpose is Refinance)',
			},
			{
				displayName: 'Subject TBD Indicator',
				name: 'subjectTBDIndicator',
				type: 'boolean',
				default: false,
				description: 'Whether the subject property is to be determined',
			},
		],
	},

	// ----------------------------------
	//         loan:get
	// ----------------------------------
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The sysGUID of the loan to retrieve',
	},

	// ----------------------------------
	//         loan:getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Search Field',
				name: 'searchField',
				type: 'options',
				options: [
					{ name: 'Borrower Email', value: 'BORROWER_EMAIL' },
					{ name: 'Borrower Name', value: 'BORROWER_NAME' },
					{ name: 'Borrower Phone Number', value: 'BORROWER_PHONE_NUMBER' },
					{ name: 'Display ID', value: 'DISPLAY_ID' },
					{ name: 'Lender Loan ID', value: 'LENDER_LOAN_ID' },
					{ name: 'System Loan GUID', value: 'SYSTEM_LOAN_GUID' },
				],
				default: '',
				description: 'Field to search on',
			},
			{
				displayName: 'Search Value',
				name: 'searchValue',
				type: 'string',
				default: '',
				description: 'Value to search for',
			},
			{
				displayName: 'Order By',
				name: 'orderBy',
				type: 'options',
				options: [
					{ name: 'Created At', value: 'createdAt' },
					{ name: 'Updated At', value: 'updatedAt' },
				],
				default: 'createdAt',
			},
			{
				displayName: 'Sort Direction',
				name: 'sort',
				type: 'options',
				options: [
					{ name: 'Ascending', value: 'ASC' },
					{ name: 'Descending', value: 'DESC' },
				],
				default: 'DESC',
			},
		],
	},

	// ----------------------------------
	//         loan:update
	// ----------------------------------
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'The sysGUID of the loan to update',
	},
	{
		displayName: 'Loan Stage',
		name: 'stage',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['update'],
			},
		},
		options: [
			{ name: 'Application Intake', value: 'APPLICATION_INTAKE' },
			{ name: 'Approved With Condition', value: 'APPROVED_WITH_CONDITION' },
			{ name: 'Broker Check Received', value: 'BROKER_CHECK_RECEIVED' },
			{ name: 'Clear To Close', value: 'CLEAR_TO_CLOSE' },
			{ name: 'Commission Paid', value: 'COMMISSION_PAID' },
			{ name: 'Disclosure Sent', value: 'DISCLOSURE_SENT' },
			{ name: 'Docs Out', value: 'DOCS_OUT' },
			{ name: 'Docs Signed', value: 'DOCS_SIGNED' },
			{ name: 'Loan Funded', value: 'LOAN_FUNDED' },
			{ name: 'Loan Setup', value: 'LOAN_SETUP' },
			{ name: 'Preapproved', value: 'PREAPPROVED' },
			{ name: 'Qualification', value: 'QUALIFICATION' },
			{ name: 'Re-Submittal', value: 'RE_SUBMITTAL' },
			{ name: 'Suspended', value: 'SUSPENDED' },
			{ name: 'Underwriting Submitted', value: 'UNDERWRITING_SUBMITTED' },
		],
		default: 'APPLICATION_INTAKE',
		description: 'New stage for the loan',
	},
	{
		displayName: 'Stage Date',
		name: 'stageDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Date of the stage change',
	},

	// ----------------------------------
	//         loan:adverse
	// ----------------------------------
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['adverse'],
			},
		},
		default: '',
		description: 'The sysGUID of the loan to adverse',
	},
	{
		displayName: 'Adverse Date',
		name: 'adverseDate',
		type: 'dateTime',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['adverse'],
			},
		},
		default: '',
		description: 'Date the loan was adversed',
	},
	{
		displayName: 'Adverse Reason',
		name: 'reason',
		type: 'options',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['adverse'],
			},
		},
		options: [
			{ name: 'Application Approved But Not Accepted', value: 'APP_APPROVED_BUT_NOT_ACCEPTED' },
			{
				name: 'Application Denied By Lending Institution',
				value: 'APP_DENIED_BY_LENDING_INSTITUTION',
			},
			{ name: 'Application Rescinded By Borrower', value: 'APP_RESCINDED_BY_BORROWER' },
			{ name: 'Application Withdrawn By Borrower', value: 'APP_WITHDRAWN_BY_BORROWER' },
			{ name: 'File Closed For Incompleteness', value: 'FILE_CLOSED_FOR_INCOMPLETENESS' },
			{
				name: 'Preapproval Approved But Not Accepted',
				value: 'PREAPPROVAL_APPROVED_BUT_NOT_ACCEPTED',
			},
			{ name: 'Preapproval Denied', value: 'PREAPPROVAL_DENIED' },
		],
		default: 'APP_DENIED_BY_LENDING_INSTITUTION',
		description: 'Reason for adversing the loan',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['adverse'],
			},
		},
		options: [
			{
				displayName: 'Decision Based On Credit',
				name: 'decisionBasedOnCredit',
				type: 'boolean',
				default: false,
				description: 'Whether the decision was based on credit report',
			},
			{
				displayName: 'Decision Based On Other Description',
				name: 'decisionBasedOnOtherDesc',
				type: 'string',
				default: '',
				description: 'Description if decision was based on other factors',
			},
			{
				displayName: 'Decision Based On Outside Source',
				name: 'decisionBasedOnOutsideSource',
				type: 'boolean',
				default: false,
				description: 'Whether the decision was based on outside source',
			},
			{
				displayName: 'Delivery Date',
				name: 'deliveryDate',
				type: 'string',
				default: '',
				description: 'Date the adverse action notice was delivered',
			},
			{
				displayName: 'Delivery Type',
				name: 'deliveryType',
				type: 'options',
				options: [
					{ name: 'Email', value: 'Email' },
					{ name: 'Hand Delivered', value: 'HandDelivered' },
					{ name: 'Mailed', value: 'Mailed' },
				],
				default: 'Mailed',
				description: 'Method of delivering adverse action notice',
			},
			{
				displayName: 'Denial Reasons',
				name: 'denialReasons',
				type: 'multiOptions',
				options: [
					{ name: 'Bankruptcy', value: 'BANKRUPTCY' },
					{ name: 'Collection Action Or Judgment', value: 'COLLECTION_ACTION_OR_JUDGMENT' },
					{ name: 'Credit - Other', value: 'CREDIT_OTHER' },
					{
						name: 'Credit Application Incomplete',
						value: 'CREDIT_APPLICATION_INCOMPLETE',
					},
					{
						name: 'Delinquent Past Or Present Credit',
						value: 'DELINQUENT_PAST_OR_PRESENT_CREDIT_OBLIGATIONS_WITH_OTHERS',
					},
					{
						name: 'Department Of HUD',
						value: 'DEPARTMENT_OF_HOUSING_AND_URBAN_DEVELOPMENT',
					},
					{ name: 'Department Of Veterans Affairs', value: 'DEPARTMENT_OF_VETERANS_AFFAIRS' },
					{ name: 'Do Not Grant Credit', value: 'DO_NOT_GRANT_CREDIT' },
					{ name: 'Employment - Other', value: 'EMPLOYMENT_STATUS_OTHER' },
					{ name: 'Excessive Obligations', value: 'EXCESSIVE_OBLIGATIONS' },
					{
						name: 'Excessive Obligations In Relation To Income',
						value: 'EXCESSIVE_OBLIGATIONS_IN_RELATION_TO_INCOME',
					},
					{ name: 'Fannie Mae', value: 'FEDERAL_NATIONAL_MORTGAGE_ASSOCIATION' },
					{ name: 'Foreclosure Or Repossession', value: 'FORECLOSURE_OR_REPOSSESSION' },
					{ name: 'Freddie Mac', value: 'FEDERAL_HOME_LOAN_MORTGAGE_ASSOCIATION' },
					{ name: 'Garnishment Or Attachment', value: 'GARNISHMENT_OR_ATTACHMENT' },
					{ name: 'Inadequate Collateral', value: 'INADEQUATE_COLLATERAL' },
					{ name: 'Income - Other', value: 'INCOME_OTHER' },
					{
						name: 'Income Insufficient For Amount Requested',
						value: 'INCOME_INSUFFICIENT_FOR_AMOUNT_OF_CREDIT_REQUESTED',
					},
					{ name: 'Insufficient Credit File', value: 'NO_CREDIT_FILE' },
					{
						name: 'Insufficient Credit References',
						value: 'INSUFFICIENT_NUMBER_OF_CREDIT_REFERENCES_PROVIDED',
					},
					{ name: 'Insufficient Funds To Close', value: 'INSUFFICIENT_FUNDS_TO_CLOSE_THE_LOAN' },
					{ name: 'Lack Of Cash Reserves', value: 'LACK_OF_CASH_RESERVES' },
					{ name: 'Length Of Employment', value: 'LENGTH_OF_EMPLOYMENT' },
					{ name: 'Length Of Residence', value: 'LENGTH_OF_RESIDENCE' },
					{ name: 'Limited Credit Experience', value: 'LIMITED_CREDIT_EXPERIENCE' },
					{ name: 'Mortgage Insurance Denied', value: 'MORTGAGE_INSURANCE_DENIED' },
					{
						name: 'Number Of Recent Inquiries',
						value: 'NUMBER_OF_RECENT_INQUIRIES_ON_CREDIT_BUREAU_REPORT',
					},
					{ name: 'Other', value: 'OTHER' },
					{ name: 'Poor Credit Performance With Us', value: 'POOR_CREDIT_PERFORMANCE_WITH_US' },
					{ name: 'Property - Unacceptable Appraisal', value: 'PROPERTYUNACCEPTABLE_APPRAISAL' },
					{ name: 'Property - Unacceptable Leasehold', value: 'UNACCEPTABLE_LEASEHOLD_ESTATE' },
					{ name: 'Property - Unacceptable Property', value: 'UNACCEPTABLE_PROPERTY' },
					{ name: 'Residence - Other', value: 'RESIDENCE_OTHER' },
					{ name: 'Temporary Or Irregular Employment', value: 'TEMPORARY_OR_IRREGULAR_EMPLOYMENT' },
					{ name: 'Temporary Residence', value: 'TEMPORARY_RESIDENCE' },
					{ name: 'Unable To Verify Credit', value: 'UNABLE_TO_VERIFY_CREDIT_REFERENCES' },
					{ name: 'Unable To Verify Employment', value: 'UNABLE_TO_VERIFY_EMPLOYMENT' },
					{ name: 'Unable To Verify Income', value: 'UNABLE_TO_VERIFY_INCOME' },
					{ name: 'Unable To Verify Residence', value: 'UNABLE_TO_VERIFY_RESIDENCE' },
					{
						name: 'Unacceptable Credit References',
						value: 'UNACCEPTABLE_TYPE_OF_CREDIT_REFERENCES_PROVIDED',
					},
					{
						name: 'Unacceptable Payment Record',
						value: 'UNACCEPTABLE_PAYMENT_RECORD_ON_PREVIOUS_MORTGAGE',
					},
					{
						name: 'Value Or Type Of Collateral Not Sufficient',
						value: 'VALUE_OR_TYPE_OF_COLLATERAL_NOT_SUFFICIENT',
					},
					{ name: 'Withdrawn By Applicant', value: 'WITHDRAWN_BY_APPLICANT' },
				],
				default: [],
				description: 'Specific reasons for denial',
			},
			{
				displayName: 'Withdrawn Reason',
				name: 'withdrawnReason',
				type: 'options',
				options: [
					{
						name: 'Competitor Offered Lower Rate Or Better Terms',
						value: 'COMPETITOR_OFFERED_LOWER_RATE_OR_BETTER_TERMS',
					},
					{ name: 'Home For Sale', value: 'HOME_FOR_SALE' },
					{ name: 'No Reason Provided', value: 'NO_REASON_PROVIDED' },
					{ name: 'Other', value: 'OTHER' },
					{ name: 'Purchase Agreement Canceled', value: 'PURCHASED_AGREEMENT_CANCELED' },
					{ name: 'Service Unsatisfactory', value: 'SERVICE_UNSATISFACTORY' },
					{ name: 'Unexpected Life Event', value: 'UNEXPECTED_LIFE_EVENT' },
				],
				default: 'NO_REASON_PROVIDED',
				description: 'Reason why application was withdrawn',
			},
		],
	},

	// ----------------------------------
	//         loan:getCreditInfo
	// ----------------------------------
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getCreditInfo'],
			},
		},
		default: '',
		description: 'The sysGUID of the loan',
	},

	// ----------------------------------
	//         loan:getREO
	// ----------------------------------
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getREO'],
			},
		},
		default: '',
		description: 'The sysGUID of the loan',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getREO'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['getREO'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		description: 'Max number of results to return',
	},

	// ----------------------------------
	//         loan:updateKeyDates
	// ----------------------------------
	{
		displayName: 'Loan ID',
		name: 'loanId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['updateKeyDates'],
			},
		},
		default: '',
		description: 'The sysGUID of the loan to update',
	},
	{
		displayName: 'Key Dates',
		name: 'keyDates',
		type: 'collection',
		placeholder: 'Add Date',
		default: {},
		displayOptions: {
			show: {
				resource: ['loan'],
				operation: ['updateKeyDates'],
			},
		},
		options: [
			{
				displayName: 'Appraisal Contingency',
				name: 'appraisalContingency',
				type: 'string',
				default: '',
				description: 'Appraisal contingency date',
			},
			{
				displayName: 'Appraisal Delivery Date',
				name: 'appraisalDeliveryDate',
				type: 'string',
				default: '',
				description: 'Date appraisal was delivered',
			},
			{
				displayName: 'Appraisal Ordered Date',
				name: 'appraisalOrderedDate',
				type: 'string',
				default: '',
				description: 'Date appraisal was ordered',
			},
			{
				displayName: 'Closing Contingency',
				name: 'closingContingency',
				type: 'string',
				default: '',
				description: 'Closing contingency date',
			},
			{
				displayName: 'Date To Avoid EPO',
				name: 'dateToAvoidEPO',
				type: 'string',
				default: '',
				description: 'Date to avoid early payoff',
			},
			{
				displayName: 'Est First Payment Date',
				name: 'estFirstPaymentDate',
				type: 'string',
				default: '',
				description: 'Estimated first payment date',
			},
			{
				displayName: 'First Payment Date',
				name: 'firstPaymentDate',
				type: 'string',
				default: '',
				description: 'Actual first payment date',
			},
			{
				displayName: 'HOI Ordered Date',
				name: 'hoiOrderedDate',
				type: 'string',
				default: '',
				description: 'Date homeowners insurance was ordered',
			},
			{
				displayName: 'HOI Received Date',
				name: 'hoiReceivedDate',
				type: 'string',
				default: '',
				description: 'Date homeowners insurance was received',
			},
			{
				displayName: 'Initial CD Sent Date',
				name: 'initialCDSentDate',
				type: 'string',
				default: '',
				description: 'Date initial closing disclosure was sent',
			},
			{
				displayName: 'Initial CD Signed Date',
				name: 'initialCDSignedDate',
				type: 'string',
				default: '',
				description: 'Date initial closing disclosure was signed',
			},
			{
				displayName: 'Initial LE Sent Date',
				name: 'initialLESentDate',
				type: 'string',
				default: '',
				description: 'Date initial loan estimate was sent',
			},
			{
				displayName: 'Initial LE Signed Date',
				name: 'initialLESignedDate',
				type: 'string',
				default: '',
				description: 'Date initial loan estimate was signed',
			},
			{
				displayName: 'Intent To Proceed Date',
				name: 'intentToProceedDate',
				type: 'string',
				default: '',
				description: 'Date borrower indicated intent to proceed',
			},
			{
				displayName: 'Loan Contingency',
				name: 'loanContingency',
				type: 'string',
				default: '',
				description: 'Loan contingency date',
			},
			{
				displayName: 'Most Recent CD Sent Date',
				name: 'mostRecentCDSentDate',
				type: 'string',
				default: '',
				description: 'Date most recent closing disclosure was sent',
			},
			{
				displayName: 'Most Recent CD Signed Date',
				name: 'mostRecentCDSignedDate',
				type: 'string',
				default: '',
				description: 'Date most recent closing disclosure was signed',
			},
			{
				displayName: 'Most Recent LE Sent Date',
				name: 'mostRecentLESentDate',
				type: 'string',
				default: '',
				description: 'Date most recent loan estimate was sent',
			},
			{
				displayName: 'Most Recent LE Signed Date',
				name: 'mostRecentLESignedDate',
				type: 'string',
				default: '',
				description: 'Date most recent loan estimate was signed',
			},
			{
				displayName: 'Pre-Approval Expiry Date',
				name: 'preApprovalExpiryDate',
				type: 'string',
				default: '',
				description: 'Date pre-approval expires',
			},
			{
				displayName: 'Tax Transcript Ordered Date',
				name: 'taxTranscriptOrderedDate',
				type: 'string',
				default: '',
				description: 'Date tax transcript was ordered',
			},
			{
				displayName: 'Tax Transcript Received Date',
				name: 'taxTranscriptReceivedDate',
				type: 'string',
				default: '',
				description: 'Date tax transcript was received',
			},
			{
				displayName: 'Title Ordered Date',
				name: 'titleOrderedDate',
				type: 'string',
				default: '',
				description: 'Date title was ordered',
			},
			{
				displayName: 'Title Received Date',
				name: 'titleReceivedDate',
				type: 'string',
				default: '',
				description: 'Date title was received',
			},
			{
				displayName: 'TRID Date',
				name: 'tridDate',
				type: 'string',
				default: '',
			},
		],
	},
];
