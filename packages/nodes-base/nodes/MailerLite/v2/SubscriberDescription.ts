import type { INodeProperties } from 'n8n-workflow';

export const subscriberOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new subscriber',
				action: 'Create a subscriber',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a subscriber',
				action: 'Delete a subscriber',
			},
			{
				name: 'Forget',
				value: 'forget',
				description: 'Forget a subscriber (GDPR compliant - deletes all data in 30 days)',
				action: 'Forget a subscriber',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get a subscriber',
				action: 'Get a subscriber',
			},
			{
				name: 'Get Activity',
				value: 'getActivity',
				description: 'Get subscriber activity log',
				action: 'Get subscriber activity',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many subscribers',
				action: 'Get many subscribers',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a subscriber',
				action: 'Update a subscriber',
			},
		],
		default: 'create',
	},
];

export const subscriberFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                subscriber:create                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['create'],
			},
		},
		description: 'Email of new subscriber',
	},

	/* -------------------------------------------------------------------------- */
	/*                                subscriber:update                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber Email',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Email of subscriber',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['update', 'create'],
			},
		},
		options: [
			{
				displayName: 'Custom Fields',
				name: 'customFieldsUi',
				placeholder: 'Add Custom Field',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				description: 'Filter by custom fields',
				default: {},
				options: [
					{
						name: 'customFieldsValues',
						displayName: 'Custom Field',
						values: [
							{
								displayName: 'Field Name or ID',
								name: 'fieldId',
								type: 'options',
								typeOptions: {
									loadOptionsMethod: 'getCustomFields',
								},
								default: '',
								description:
									'The ID of the field to add custom field to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								default: '',
								description: 'The value to set on custom field',
							},
						],
					},
				],
			},
			{
				displayName: 'Group Names or IDs',
				name: 'groups',
				type: 'multiOptions',
				typeOptions: {
					loadOptionsMethod: 'getGroups',
				},
				default: [],
				description:
					'Groups to assign the subscriber to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'Resubscribe',
				name: 'resubscribe',
				type: 'boolean',
				default: false,
				description: 'Whether to resubscribe previously unsubscribed subscribers',
				displayOptions: {
					show: {
						'/operation': ['create'],
					},
				},
			},
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
				default: '',
			},
			{
				displayName: 'Subscribed At',
				name: 'subscribed_at',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'IP Address',
				name: 'ip_address',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Opted In At',
				name: 'opted_in_at',
				type: 'dateTime',
				default: '',
			},
			{
				displayName: 'Opt In IP',
				name: 'optin_ip',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Unsubscribed At',
				name: 'unsubscribed_at',
				type: 'dateTime',
				default: '',
			},
		],
	},

	/* -------------------------------------------------------------------------- */
	/*                                subscriber:delete                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber Email or ID',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'Email or ID of subscriber to delete',
	},

	/* -------------------------------------------------------------------------- */
	/*                                subscriber:forget                           */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber Email or ID',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['forget'],
			},
		},
		default: '',
		description: 'Email or ID of subscriber to forget (GDPR - permanently deletes data in 30 days)',
	},

	/* -------------------------------------------------------------------------- */
	/*                                  subscriber:get                            */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber Email or ID',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Email or ID of subscriber to get',
	},

	/* -------------------------------------------------------------------------- */
	/*                              subscriber:getActivity                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Subscriber ID',
		name: 'subscriberId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['subscriber'],
				operation: ['getActivity'],
			},
		},
		default: '',
		description: 'ID of subscriber to get activity for',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['subscriber'],
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
				resource: ['subscriber'],
				operation: ['getActivity'],
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
				operation: ['getActivity'],
				resource: ['subscriber'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Log Name',
				name: 'log_name',
				type: 'options',
				options: [
					{
						name: 'Campaign Send',
						value: 'campaign_send',
					},
					{
						name: 'Automation Email Sent',
						value: 'automation_email_sent',
					},
					{
						name: 'Email Open',
						value: 'email_open',
					},
					{
						name: 'Link Click',
						value: 'link_click',
					},
					{
						name: 'Email Bounce',
						value: 'email_bounce',
					},
					{
						name: 'Spam Complaint',
						value: 'spam_complaint',
					},
					{
						name: 'Unsubscribed',
						value: 'unsubscribed',
					},
					{
						name: 'Email Forward',
						value: 'email_forward',
					},
					{
						name: 'Marketing Preferences Change',
						value: 'marketing_preferences_change',
					},
					{
						name: 'Preference Center',
						value: 'preference_center',
					},
				],
				default: '',
				description: 'Filter by activity log name',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                  subscriber:getAll                         */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['subscriber'],
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
				resource: ['subscriber'],
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
				resource: ['subscriber'],
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
				default: '',
			},
		],
	},
];
