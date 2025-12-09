import type { INodeProperties } from 'n8n-workflow';

export const groupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'Assign Subscriber',
				value: 'assignSubscriber',
				description: 'Assign a subscriber to a group',
				action: 'Assign subscriber to group',
			},
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new group',
				action: 'Create a group',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a group',
				action: 'Delete a group',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a group',
				action: 'Get a group',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many groups',
				action: 'Get many groups',
			},
			{
				name: 'Get Subscribers',
				value: 'getSubscribers',
				description: 'Get subscribers in a group',
				action: 'Get subscribers in group',
			},
			{
				name: 'Unassign Subscriber',
				value: 'unassignSubscriber',
				description: 'Unassign a subscriber from a group',
				action: 'Unassign subscriber from group',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a group',
				action: 'Update a group',
			},
		],
		default: 'getAll',
	},
];

export const groupFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                group:create                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['create'],
			},
		},
		description: 'Name of the group',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:delete                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Group Name or ID',
		name: 'groupId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['delete'],
			},
		},
		default: '',
		description:
			'Group to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:get                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Group Name or ID',
		name: 'groupId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['get'],
			},
		},
		default: '',
		description:
			'Group to get. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                                group:getAll                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['group'],
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
				resource: ['group'],
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
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['group'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by group name (partial match)',
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
						name: 'Total (Ascending)',
						value: 'total',
					},
					{
						name: 'Total (Descending)',
						value: '-total',
					},
					{
						name: 'Open Rate (Ascending)',
						value: 'open_rate',
					},
					{
						name: 'Open Rate (Descending)',
						value: '-open_rate',
					},
					{
						name: 'Click Rate (Ascending)',
						value: 'click_rate',
					},
					{
						name: 'Click Rate (Descending)',
						value: '-click_rate',
					},
					{
						name: 'Created At (Ascending)',
						value: 'created_at',
					},
					{
						name: 'Created At (Descending)',
						value: '-created_at',
					},
				],
				default: '',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                              group:getSubscribers                          */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Group Name or ID',
		name: 'groupId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getSubscribers'],
			},
		},
		default: '',
		description:
			'Group to get subscribers from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['group'],
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
				resource: ['group'],
				operation: ['getSubscribers'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
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
				resource: ['group'],
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
	/*                              group:update                                  */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Group Name or ID',
		name: 'groupId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['update'],
			},
		},
		default: '',
		description:
			'Group to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['update'],
			},
		},
		description: 'New name for the group',
	},

	/* -------------------------------------------------------------------------- */
	/*                          group:assignSubscriber                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber Email or ID',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['assignSubscriber'],
			},
		},
		default: '',
		description: 'Subscriber to assign to the group',
	},
	{
		displayName: 'Group Name or ID',
		name: 'groupId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['assignSubscriber'],
			},
		},
		default: '',
		description:
			'Group to assign subscriber to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},

	/* -------------------------------------------------------------------------- */
	/*                        group:unassignSubscriber                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber Email or ID',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['unassignSubscriber'],
			},
		},
		default: '',
		description: 'Subscriber to unassign from the group',
	},
	{
		displayName: 'Group Name or ID',
		name: 'groupId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getGroups',
		},
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['unassignSubscriber'],
			},
		},
		default: '',
		description:
			'Group to unassign subscriber from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
];
