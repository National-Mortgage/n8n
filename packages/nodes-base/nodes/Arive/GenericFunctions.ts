import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

let accessTokenCache: { token: string; expiresAt: number } | null = null;

async function getAccessToken(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
): Promise<string> {
	const credentials = await this.getCredentials('ariveApi');

	// Check if we have cached token and it's not expired
	if (accessTokenCache && accessTokenCache.expiresAt > Date.now()) {
		return accessTokenCache.token;
	}

	// Check if OAuth credentials are provided
	const hasOAuthCreds =
		credentials.clientId && credentials.secret && credentials.appId && credentials.appSecretHash;

	if (!hasOAuthCreds) {
		// Use simple API key authentication
		return credentials.apiKey as string;
	}

	// Get new access token via OAuth
	const loginBody = {
		clientId: credentials.clientId,
		secret: credentials.secret,
		apiKey: credentials.apiKey,
		appId: credentials.appId,
		appSecretHash: credentials.appSecretHash,
	};

	const options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': credentials.apiKey as string,
		},
		method: 'POST',
		body: loginBody,
		uri: `${credentials.baseUrl}/api/auth/login`,
		json: true,
	};

	try {
		const response = await this.helpers.request(options);
		const expiresIn = (response.ExpiresIn as number) || 3600;
		accessTokenCache = {
			token: response.AccessToken as string,
			expiresAt: Date.now() + expiresIn * 1000 - 60000, // Refresh 1 min before expiry
		};
		return accessTokenCache.token;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function ariveApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	const credentials = await this.getCredentials('ariveApi');
	const token = await getAccessToken.call(this);

	// Check if using OAuth (AccessToken) or simple API key
	const hasOAuthCreds =
		credentials.clientId && credentials.secret && credentials.appId && credentials.appSecretHash;

	const headers: IDataObject = {
		'Content-Type': 'application/json',
	};

	if (hasOAuthCreds) {
		headers['Authorization'] = `Bearer ${token}`;
		headers['X-API-KEY'] = credentials.apiKey as string;
	} else {
		headers['X-API-KEY'] = token;
	}

	let options: IRequestOptions = {
		headers,
		method,
		qs,
		body,
		uri: uri || `${credentials.baseUrl}${resource}`,
		json: true,
	};

	options = Object.assign({}, options, option);

	if (Object.keys(options.body as IDataObject).length === 0) {
		delete options.body;
	}

	try {
		return await this.helpers.request(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function ariveApiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	propertyName: string,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	query: IDataObject = {},
): Promise<any> {
	const returnData: IDataObject[] = [];

	let responseData;
	query.offset = 0;
	query.limit = 100;

	do {
		responseData = await ariveApiRequest.call(this, method, endpoint, body, query);
		const items = responseData[propertyName];
		if (items) {
			returnData.push.apply(returnData, items as IDataObject[]);
		}
		query.offset = query.offset + query.limit;
	} while (responseData[propertyName] && responseData[propertyName].length === query.limit);

	return returnData;
}

export function validateJSON(json: string | undefined): any {
	let result;
	try {
		result = JSON.parse(json!);
	} catch (exception) {
		result = undefined;
	}
	return result;
}
