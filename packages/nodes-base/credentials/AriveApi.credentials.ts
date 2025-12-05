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
			default: 'https://gwapiconnect.myarive.com',
			description: 'The base URL of your Arive API instance',
			placeholder: 'https://gwapiconnect.myarive.com',
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
			description: 'Client ID from Arive',
		},
		{
			displayName: 'Client Secret',
			name: 'secret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Client Secret from Arive',
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		// First, get access token by calling /api/auth/login
		const loginBody = {
			clientId: credentials.clientId,
			secret: credentials.secret,
			apiKey: credentials.apiKey,
		};

		console.log('=== ARIVE LOGIN ATTEMPT ===');
		console.log('Login URL:', `${credentials.baseUrl}/api/auth/access-token`);
		console.log('Login body:', {
			clientId: credentials.clientId,
			secret: '[REDACTED]',
			apiKey: '[REDACTED]',
		});

		const loginResponse = await fetch(`${credentials.baseUrl}/api/auth/access-token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': credentials.apiKey as string,
			},
			body: JSON.stringify(loginBody),
		});

		console.log('Login response status:', loginResponse.status, loginResponse.statusText);

		if (!loginResponse.ok) {
			const errorText = await loginResponse.text();
			console.error('Login failed response:', errorText);
			throw new Error(`Arive authentication failed (${loginResponse.status}): ${errorText}`);
		}

		const loginData = (await loginResponse.json()) as { AccessToken: string };
		console.log('Login successful, got AccessToken');

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
