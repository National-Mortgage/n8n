import jwt from 'jsonwebtoken';
import moment from 'moment-timezone';
import { DateTime } from 'luxon';
import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IDataObject,
	INodePropertyOptions,
	JsonObject,
	IHttpRequestMethods,
	IRequestOptions,
	IPollFunctions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

function getOptions(
	this: IExecuteFunctions | ILoadOptionsFunctions | IPollFunctions,
	method: IHttpRequestMethods,
	endpoint: string,

	body: any,
	qs: IDataObject,
	instanceUrl: string,
): IRequestOptions {
	const options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
		method,
		body,
		qs,
		uri: `${instanceUrl}/services/data/v59.0${endpoint}`,
		json: true,
	};

	if (!Object.keys(options.body as IDataObject).length) {
		delete options.body;
	}

	return options;
}

async function getAccessToken(
	this: IExecuteFunctions | ILoadOptionsFunctions | IPollFunctions,
	credentials: IDataObject,
): Promise<IDataObject> {
	const now = moment().unix();
	const authUrl =
		credentials.environment === 'sandbox'
			? 'https://test.salesforce.com'
			: 'https://login.salesforce.com';

	const signature = jwt.sign(
		{
			iss: credentials.clientId as string,
			sub: credentials.username as string,
			aud: authUrl,
			exp: now + 3 * 60,
		},
		credentials.privateKey as string,
		{
			algorithm: 'RS256',
			header: {
				alg: 'RS256',
			},
		},
	);

	const options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
		form: {
			grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
			assertion: signature,
		},
		uri: `${authUrl}/services/oauth2/token`,
		json: true,
	};

	return await this.helpers.request(options);
}

export async function salesforceApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IPollFunctions,
	method: IHttpRequestMethods,
	endpoint: string,

	body: any = {},
	qs: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
): Promise<any> {
	let authenticationMethod = 'oAuth2';
	try {
		// Try to get authentication parameter - trigger nodes don't have this parameter
		authenticationMethod = this.getNodeParameter('authentication', 0, 'oAuth2') as string;
	} catch (error) {
		// If parameter doesn't exist (e.g., in trigger nodes), default to oAuth2
		authenticationMethod = 'oAuth2';
	}
	try {
		if (authenticationMethod === 'jwt') {
			// https://help.salesforce.com/articleView?id=remoteaccess_oauth_jwt_flow.htm&type=5
			const credentialsType = 'salesforceJwtApi';
			const credentials = await this.getCredentials(credentialsType);
			const response = await getAccessToken.call(this, credentials);
			const { instance_url, access_token } = response;
			const options = getOptions.call(
				this,
				method,
				uri || endpoint,
				body,
				qs,
				instance_url as string,
			);
			this.logger.debug(
				`Authentication for "Salesforce" node is using "jwt". Invoking URI ${options.uri}`,
			);
			options.headers!.Authorization = `Bearer ${access_token}`;
			Object.assign(options, option);
			return await this.helpers.request(options);
		} else {
			// https://help.salesforce.com/articleView?id=remoteaccess_oauth_web_server_flow.htm&type=5
			const credentialsType = 'salesforceOAuth2Api';
			const credentials = await this.getCredentials<{
				oauthTokenData: { instance_url: string };
			}>(credentialsType);
			const options = getOptions.call(
				this,
				method,
				uri || endpoint,
				body,
				qs,
				credentials.oauthTokenData.instance_url,
			);
			this.logger.debug(
				`Authentication for "Salesforce" node is using "OAuth2". Invoking URI ${options.uri}`,
			);
			Object.assign(options, option);

			return await this.helpers.requestOAuth2.call(this, credentialsType, options);
		}
	} catch (error) {
		// Log detailed Salesforce API error information for debugging
		this.logger.error('Salesforce API Error Details:', {
			message: (error as any).message,
			// @ts-ignore
			responseData: error.response?.data,
			// @ts-ignore
			responseStatus: error.response?.status,
			// @ts-ignore
			responseStatusText: error.response?.statusText,
			// @ts-ignore
			config: {
				// @ts-ignore
				url: error.config?.url,
				// @ts-ignore
				method: error.config?.method,
				// @ts-ignore
				params: error.config?.params,
			},
		});
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function salesforceApiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions | IPollFunctions,
	propertyName: string,
	method: IHttpRequestMethods,
	endpoint: string,

	body: any = {},
	query: IDataObject = {},
): Promise<any> {
	const returnData: IDataObject[] = [];

	let responseData;
	let uri: string | undefined;

	do {
		responseData = await salesforceApiRequest.call(this, method, endpoint, body, query, uri);
		uri = `${endpoint}/${responseData.nextRecordsUrl?.split('/')?.pop()}`;
		returnData.push.apply(returnData, responseData[propertyName] as IDataObject[]);
	} while (responseData.nextRecordsUrl !== undefined && responseData.nextRecordsUrl !== null);

	return returnData;
}

/**
 * Sorts the given options alphabetically
 *
 */
export function sortOptions(options: INodePropertyOptions[]): void {
	options.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});
}

/**
 * Salesforce date literals that should not be quoted
 */
const SALESFORCE_DATE_LITERALS = [
	'TODAY',
	'YESTERDAY',
	'TOMORROW',
	'THIS_WEEK',
	'LAST_WEEK',
	'NEXT_WEEK',
	'THIS_MONTH',
	'LAST_MONTH',
	'NEXT_MONTH',
	'THIS_QUARTER',
	'LAST_QUARTER',
	'NEXT_QUARTER',
	'THIS_YEAR',
	'LAST_YEAR',
	'NEXT_YEAR',
	'THIS_FISCAL_QUARTER',
	'LAST_FISCAL_QUARTER',
	'NEXT_FISCAL_QUARTER',
	'THIS_FISCAL_YEAR',
	'LAST_FISCAL_YEAR',
	'NEXT_FISCAL_YEAR',
];

export function getValue(value: any) {
	// Handle null/undefined
	if (value === null || value === undefined) {
		return 'null';
	}

	const stringValue = String(value).trim();

	// Check if it's a Salesforce date literal (TODAY, YESTERDAY, etc.)
	if (SALESFORCE_DATE_LITERALS.includes(stringValue.toUpperCase())) {
		return stringValue.toUpperCase();
	}

	// Check if it's a date literal with parameter (e.g., LAST_N_DAYS:7, NEXT_N_QUARTERS:2)
	if (
		/^(LAST|NEXT)_N_(DAYS|WEEKS|MONTHS|QUARTERS|YEARS|FISCAL_QUARTERS|FISCAL_YEARS):\d+$/i.test(
			stringValue,
		)
	) {
		return stringValue.toUpperCase();
	}

	// Check if value is wrapped in a Salesforce function (e.g., DAY_ONLY(), CALENDAR_MONTH())
	if (
		/^(DAY_ONLY|CALENDAR_MONTH|CALENDAR_YEAR|HOUR_IN_DAY|WEEK_IN_MONTH|WEEK_IN_YEAR)\(.+\)$/i.test(
			stringValue,
		)
	) {
		return stringValue;
	}

	// If it's a valid ISO date string, return without quotes (Salesforce SOQL requirement)
	if (moment(value as string, moment.ISO_8601, true).isValid()) {
		return value;
	}

	// If it's a string, wrap in quotes
	if (typeof value === 'string') {
		return `'${value}'`;
	}

	// Numbers and booleans return as-is
	return value;
}

export function getConditions(options: IDataObject) {
	const conditions = (options.conditionsUi as IDataObject)?.conditionValues as IDataObject[];
	let data = undefined;
	if (Array.isArray(conditions) && conditions.length !== 0) {
		data = conditions.map((condition: IDataObject) => {
			const field = condition.field as string;
			const operation = condition.operation as string;
			const value = condition.value;

			// Handle different operators
			switch (operation) {
				case 'equal':
					return `${field} = ${getValue(value)}`;
				case 'notEqual':
					return `${field} != ${getValue(value)}`;
				case '<':
				case '<=':
				case '>':
				case '>=':
					return `${field} ${operation} ${getValue(value)}`;
				case 'like':
					return `${field} LIKE ${getValue(value)}`;
				case 'notLike':
					return `${field} NOT LIKE ${getValue(value)}`;
				case 'in':
					// value should be comma-separated string or array
					const inValues = Array.isArray(value)
						? value.map((v) => getValue(v)).join(',')
						: String(value)
								.split(',')
								.map((v) => getValue(v.trim()))
								.join(',');
					return `${field} IN (${inValues})`;
				case 'notIn':
					const notInValues = Array.isArray(value)
						? value.map((v) => getValue(v)).join(',')
						: String(value)
								.split(',')
								.map((v) => getValue(v.trim()))
								.join(',');
					return `${field} NOT IN (${notInValues})`;
				case 'includes':
					// For multi-select picklists
					return `${field} INCLUDES (${getValue(value)})`;
				case 'excludes':
					// For multi-select picklists
					return `${field} EXCLUDES (${getValue(value)})`;
				case 'isNull':
					return `${field} = null`;
				case 'isNotNull':
					return `${field} != null`;
				default:
					// Fallback to original behavior
					return `${field} ${operation} ${getValue(value)}`;
			}
		});
		data = `WHERE ${data.join(' AND ')}`;
	}
	return data;
}

export function getDefaultFields(sobject: string) {
	return (
		{
			Account: 'id,name,type',
			Lead: 'id,company,firstname,lastname,street,postalCode,city,email,status',
			Contact: 'id,firstname,lastname,email',
			Opportunity: 'id,accountId,amount,probability,type',
			Case: 'id,accountId,contactId,priority,status,subject,type',
			Task: 'id,subject,status,priority',
			Attachment: 'id,name',
			User: 'id,name,email',
		} as IDataObject
	)[sobject];
}

export function getQuery(options: IDataObject, sobject: string, returnAll: boolean, limit = 0) {
	const fields: string[] = [];
	if (options.fields) {
		// options.fields is comma separated in standard Salesforce objects and array in custom Salesforce objects -- handle both cases
		if (typeof options.fields === 'string') {
			fields.push.apply(fields, options.fields.split(','));
		} else {
			fields.push.apply(fields, options.fields as string[]);
		}
	} else {
		fields.push.apply(fields, ((getDefaultFields(sobject) as string) || 'id').split(','));
	}
	const conditions = getConditions(options);

	let query = `SELECT ${fields.join(',')} FROM ${sobject} ${conditions ? conditions : ''}`;

	if (!returnAll) {
		query = `SELECT ${fields.join(',')} FROM ${sobject} ${
			conditions ? conditions : ''
		} LIMIT ${limit}`;
	}

	return query;
}

/**
 * Calculates the polling start date with safety margin to account for Salesforce indexing delays
 */
export function getPollStartDate(lastTimeChecked: string | undefined): string {
	if (!lastTimeChecked) {
		return DateTime.now().toISO();
	}
	const safetyMarginMinutes = 15;
	return DateTime.fromISO(lastTimeChecked).minus({ minutes: safetyMarginMinutes }).toISO();
}

/**
 * Filters out already processed items and manages the processed IDs list
 */
export function filterAndManageProcessedItems(
	responseData: IDataObject[],
	processedIds: string[],
): { newItems: IDataObject[]; updatedProcessedIds: string[] } {
	const processedIdsSet = new Set(processedIds);

	const newItems: IDataObject[] = [];
	const newItemIds: string[] = [];

	for (const item of responseData) {
		if (typeof item.Id !== 'string') continue;

		const itemId = item.Id;
		if (!processedIdsSet.has(itemId)) {
			newItems.push(item);
			newItemIds.push(itemId);
		}
	}

	const remainingProcessedIds = Array.from(processedIdsSet);
	const updatedProcessedIds = remainingProcessedIds.concat(newItemIds);

	const MAX_IDS = 10000;
	const trimmedProcessedIds = updatedProcessedIds.slice(-MAX_IDS);

	return { newItems, updatedProcessedIds: trimmedProcessedIds };
}

/**
 * Get all fields for a Salesforce object
 */
export async function getFieldsForObject(
	this: ILoadOptionsFunctions,
	objectName: string,
): Promise<INodePropertyOptions[]> {
	const returnData: INodePropertyOptions[] = [];
	try {
		const { fields } = await salesforceApiRequest.call(
			this,
			'GET',
			`/sobjects/${objectName}/describe`,
		);
		for (const field of fields) {
			const fieldName = field.label;
			const fieldId = field.name;
			returnData.push({
				name: `${fieldName} (${fieldId})`,
				value: fieldId,
			});
		}
		sortOptions(returnData);
		return returnData;
	} catch (error) {
		return returnData;
	}
}

/**
 * Get all Salesforce objects (standard and custom)
 */
export async function getAllObjects(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const returnData: INodePropertyOptions[] = [];
	try {
		const { sobjects: objects } = await salesforceApiRequest.call(this, 'GET', '/sobjects');
		for (const object of objects) {
			const objectName = object.label;
			const objectId = object.name;
			returnData.push({
				name: objectName,
				value: objectId,
			});
		}
		sortOptions(returnData);
		return returnData;
	} catch (error) {
		return returnData;
	}
}

/**
 * Detect if specific fields changed between current and previous record state
 */
export function detectFieldChanges(
	currentRecord: IDataObject,
	previousSnapshot: IDataObject | undefined,
	fieldsToWatch: string[],
	matchLogic: 'and' | 'or' = 'or',
): boolean {
	// If no previous snapshot, treat as new record (field changed from null)
	if (!previousSnapshot) {
		return true;
	}

	const changedFields = fieldsToWatch.filter((field) => {
		const currentValue = currentRecord[field];
		const previousValue = previousSnapshot[field];
		return currentValue !== previousValue;
	});

	if (matchLogic === 'and') {
		// ALL fields must have changed
		return changedFields.length === fieldsToWatch.length;
	} else {
		// ANY field changed (OR logic)
		return changedFields.length > 0;
	}
}
