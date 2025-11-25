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
				name: 'Get Many',
				value: 'getAll',
				description: 'Search many loans',
				action: 'Get many loans',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update loan stage',
				action: 'Update a loan',
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
				displayName: 'Loan Amount',
				name: 'baseLoanAmount',
				type: 'number',
				default: 0,
				description: 'Base loan amount',
			},
			{
				displayName: 'Purchase Price / Property Value',
				name: 'purchasePriceOrEstimatedValue',
				type: 'number',
				default: 0,
				description: 'Purchase price or estimated property value',
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
			},
			{
				displayName: 'Property Street Address',
				name: 'propertyAddressLine',
				type: 'string',
				default: '',
				description: 'Subject property street address',
			},
			{
				displayName: 'Property City',
				name: 'propertyCity',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Property State',
				name: 'propertyState',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Property Postal Code',
				name: 'propertyPostalCode',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Borrower Phone',
				name: 'borrowerPhone',
				type: 'string',
				default: '',
				description: 'Borrower mobile phone (10 digits)',
			},
			{
				displayName: 'Co-Borrower First Name',
				name: 'coBorrowerFirstName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Co-Borrower Last Name',
				name: 'coBorrowerLastName',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Co-Borrower Email',
				name: 'coBorrowerEmail',
				type: 'string',
				default: '',
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
];
