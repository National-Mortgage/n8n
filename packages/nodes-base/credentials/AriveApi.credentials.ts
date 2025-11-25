import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class AriveApi implements ICredentialType {
	name = 'ariveApi';

	displayName = 'Arive API';

	documentationUrl = 'arive';

	properties: INodeProperties[] = [
		{
			displayName: 'API Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.arive.com',
			description: 'The base URL of your Arive API instance',
			placeholder: 'https://api.arive.com',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your Arive API key - get this from Arive Integration settings',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			description: 'Client ID issued by Arive',
		},
		{
			displayName: 'Secret Access Key',
			name: 'secret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Secret Access Key',
		},
		{
			displayName: 'App ID',
			name: 'appId',
			type: 'string',
			default: '',
			description: 'App ID',
		},
		{
			displayName: 'App Secret Hash',
			name: 'appSecretHash',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'App Secret Hash (created with client id, app id and App Secret)',
		},
	];
}
