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
			description: 'Your Arive API key from the Integration settings screen in Arive',
			placeholder: 'Enter your API key',
		},
	];

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		requestOptions.headers = {
			...requestOptions.headers,
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
