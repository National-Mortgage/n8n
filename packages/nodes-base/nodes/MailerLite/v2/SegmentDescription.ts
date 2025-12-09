import type { INodeProperties } from 'n8n-workflow';

export const segmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['segment'],
			},
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a segment',
				action: 'Delete a segment',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many segments',
				action: 'Get many segments',
			},
			{
				name: 'Get Subscribers',
				value: 'getSubscribers',
				description: 'Get subscribers in a segment',
				action: 'Get subscribers in segment',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a segment',
				action: 'Update a segment',
			},
		],
		default: 'getAll',
	},
];

export const segmentFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                segment:delete                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Segment Name or ID',
		name: 'segmentId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getSegments',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['segment'],
				operation: ['delete'],
			},
		},
		default: '',
		description:
			'Segment to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                segment:getAll                              */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['segment'],
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
				resource: ['segment'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 250,
		},
		default: 25,
		description: 'Max number of results to return',
	},

	/* -------------------------------------------------------------------------- */
	/*                            segment:getSubscribers                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Segment Name or ID',
		name: 'segmentId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getSegments',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['segment'],
				operation: ['getSubscribers'],
			},
		},
		default: '',
		description:
			'Segment to get subscribers from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['segment'],
				operation: ['getSubscribers'],
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
				resource: ['segment'],
				operation: ['getSubscribers'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 25,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		displayOptions: {
			show: {
				operation: ['getSubscribers'],
				resource: ['segment'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'active',
					},
					{
						name: 'Bounced',
						value: 'bounced',
					},
					{
						name: 'Junk',
						value: 'junk',
					},
					{
						name: 'Unconfirmed',
						value: 'unconfirmed',
					},
					{
						name: 'Unsubscribed',
						value: 'unsubscribed',
					},
				],
				default: 'active',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                              segment:update                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Segment Name or ID',
		name: 'segmentId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getSegments',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['segment'],
				operation: ['update'],
			},
		},
		default: '',
		description:
			'Segment to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['segment'],
				operation: ['update'],
			},
		},
		description: 'New name for the segment (max 255 characters)',
	},
];
