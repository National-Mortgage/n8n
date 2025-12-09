import type { INodeProperties } from 'n8n-workflow';

export const fieldOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['field'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new custom field',
				action: 'Create a field',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a custom field',
				action: 'Delete a field',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many custom fields',
				action: 'Get many fields',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a custom field',
				action: 'Update a field',
			},
		],
		default: 'getAll',
	},
];

export const fieldFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                field:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['field'],
				operation: ['create'],
			},
		},
		description: 'Name of the custom field (max 255 characters)',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		required: true,
		options: [
			{
				name: 'Date',
				value: 'date',
			},
			{
				name: 'Number',
				value: 'number',
			},
			{
				name: 'Text',
				value: 'text',
			},
		],
		default: 'text',
		displayOptions: {
			show: {
				resource: ['field'],
				operation: ['create'],
			},
		},
		description: 'Type of the custom field',
	},

	/* -------------------------------------------------------------------------- */
	/*                                field:delete                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Field Name or ID',
		name: 'fieldId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getCustomFields',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['field'],
				operation: ['delete'],
			},
		},
		default: '',
		description:
			'Custom field to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                field:getAll                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['field'],
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
				resource: ['field'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 100,
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
				resource: ['field'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Keyword',
				name: 'keyword',
				type: 'string',
				default: '',
				description: 'Filter by keyword (partial match)',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{
						name: 'Date',
						value: 'date',
					},
					{
						name: 'Number',
						value: 'number',
					},
					{
						name: 'Text',
						value: 'text',
					},
				],
				default: '',
				description: 'Filter by field type',
			},
			{
				displayName: 'Sort',
				name: 'sort',
				type: 'options',
				options: [
					{
						name: 'Name (Ascending)',
						value: 'name',
					},
					{
						name: 'Name (Descending)',
						value: '-name',
					},
					{
						name: 'Type (Ascending)',
						value: 'type',
					},
					{
						name: 'Type (Descending)',
						value: '-type',
					},
				],
				default: '',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                              field:update                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Field Name or ID',
		name: 'fieldId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getCustomFields',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['field'],
				operation: ['update'],
			},
		},
		default: '',
		description:
			'Custom field to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['field'],
				operation: ['update'],
			},
		},
		description: 'New name for the custom field (max 255 characters)',
	},
];
