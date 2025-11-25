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
			description: 'Your Arive API key - get this from Arive Integration settings',
		},
	];
}
