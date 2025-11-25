import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
	JsonObject,
} from 'n8n-workflow';
import { NodeApiError, NodeOperationError } from 'n8n-workflow';

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

	// Validate API key is present
	if (!credentials.apiKey || credentials.apiKey === '') {
		throw new NodeOperationError(
			this.getNode(),
			'API Key is required. Please enter your Arive API key in the credentials.',
		);
	}

	let options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': credentials.apiKey as string,
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
