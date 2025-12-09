import type { INodeProperties } from 'n8n-workflow';

export const automationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['automation'],
			},
		},
		options: [
			{
				name: 'Create Draft',
				value: 'create',
				description: 'Create a draft automation',
				action: 'Create draft automation',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an automation',
				action: 'Delete an automation',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get an automation',
				action: 'Get an automation',
			},
			{
				name: 'Get Activity',
				value: 'getActivity',
				description: 'Get subscriber activity for an automation',
				action: 'Get automation activity',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many automations',
				action: 'Get many automations',
			},
		],
		default: 'getAll',
	},
];

export const automationFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                              automation:create                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['create'],
			},
		},
		description: 'Name of the draft automation',
	},

	/* -------------------------------------------------------------------------- */
	/*                              automation:delete                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Automation Name or ID',
		name: 'automationId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAutomations',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['delete'],
			},
		},
		default: '',
		description:
			'Automation to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                automation:get                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Automation Name or ID',
		name: 'automationId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAutomations',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['get'],
			},
		},
		default: '',
		description:
			'Automation to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                            automation:getActivity                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Automation Name or ID',
		name: 'automationId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAutomations',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['getActivity'],
			},
		},
		default: '',
		description:
			'Automation to get activity for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['automation'],
				operation: ['getActivity'],
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
				resource: ['automation'],
				operation: ['getActivity'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 10,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				operation: ['getActivity'],
				resource: ['automation'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				required: true,
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Canceled',
						value: 'canceled',
					},
					{
						name: 'Completed',
						value: 'completed',
					},
					{
						name: 'Failed',
						value: 'failed',
					},
				],
				default: 'completed',
				description: 'Filter by activity status',
			},
			{
				displayName: 'Date From',
				name: 'date_from',
				type: 'dateTime',
				default: '',
				description: 'Filter by date from (relevant for completed, canceled, failed statuses)',
			},
			{
				displayName: 'Date To',
				name: 'date_to',
				type: 'dateTime',
				default: '',
				description: 'Filter by date to (relevant for completed, canceled, failed statuses)',
			},
			{
				displayName: 'Scheduled From',
				name: 'scheduled_from',
				type: 'dateTime',
				default: '',
				description: 'Filter by scheduled from date (relevant for active status)',
			},
			{
				displayName: 'Scheduled To',
				name: 'scheduled_to',
				type: 'dateTime',
				default: '',
				description: 'Filter by scheduled to date (relevant for active status)',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by subscriber email',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                              automation:getAll                             */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['automation'],
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
				resource: ['automation'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 10,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['automation'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Enabled',
				name: 'enabled',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: true,
					},
					{
						name: 'Inactive',
						value: false,
					},
				],
				default: '',
				description: 'Filter by automation status',
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by automation name',
			},
			{
				displayName: 'Group Name or ID',
				name: 'group',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getGroups',
				},
				default: '',
				description:
					'Filter by group used in trigger. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
		],
	},
];
