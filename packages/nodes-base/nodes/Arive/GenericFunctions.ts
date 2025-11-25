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

	console.log('=== ARIVE API REQUEST DEBUG ===');
	console.log('Credentials:', {
		baseUrl: credentials.baseUrl,
		hasApiKey: !!credentials.apiKey,
		apiKeyLength: credentials.apiKey ? (credentials.apiKey as string).length : 0,
	});
	console.log('Request:', { method, resource, uri: uri || `${credentials.baseUrl}${resource}` });

	let options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
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

	console.log(
		'Request options BEFORE requestWithAuthentication:',
		JSON.stringify(options, null, 2),
	);

	try {
		// This will use the authenticate() method from AriveApi.credentials.ts
		// which adds the X-API-KEY header
		const response = await this.helpers.requestWithAuthentication.call(this, 'ariveApi', options);
		console.log('=== SUCCESS ===', response);
		return response;
	} catch (error) {
		console.error('=== REQUEST FAILED ===', error);
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
