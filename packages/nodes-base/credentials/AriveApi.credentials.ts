import type {
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';

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
			description: 'Your Arive API key from the Integration settings screen',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'Client ID from Arive Integration settings',
		},
		{
			displayName: 'Secret',
			name: 'secret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Secret Access Key from Arive Integration settings',
		},
		{
			displayName: 'App ID',
			name: 'appId',
			type: 'string',
			default: '',
			required: true,
			description: 'App ID from Arive Integration settings',
		},
		{
			displayName: 'App Secret Hash',
			name: 'appSecretHash',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'App Secret Hash from Arive Integration settings',
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		// First, get access token by calling /api/auth/login
		const loginResponse = await fetch(`${credentials.baseUrl}/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': credentials.apiKey as string,
			},
			body: JSON.stringify({
				clientId: credentials.clientId,
				secret: credentials.secret,
				apiKey: credentials.apiKey,
				appId: credentials.appId,
				appSecretHash: credentials.appSecretHash,
			}),
		});

		if (!loginResponse.ok) {
			throw new Error(`Arive authentication failed: ${loginResponse.statusText}`);
		}

		const loginData = (await loginResponse.json()) as { AccessToken: string };

		// Use the access token for subsequent requests
		requestOptions.headers = {
			...requestOptions.headers,
			Authorization: `Bearer ${loginData.AccessToken}`,
			'X-API-KEY': credentials.apiKey as string,
		};
		return requestOptions;
	}

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/loans?limit=1',
			method: 'GET',
		},
	};
}
