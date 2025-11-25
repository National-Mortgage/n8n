import type {
	IHookFunctions,
	IWebhookFunctions,
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

import { ariveApiRequest } from './GenericFunctions';

export class AriveTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Arive Trigger',
		name: 'ariveTrigger',
		icon: 'file:arive.svg',
		group: ['trigger'],
		version: 1,
		description: 'Handle Arive webhook events',
		defaults: {
			name: 'Arive Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'ariveApi',
				required: true,
			},
		],
		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: 'webhook',
			},
		],
		properties: [
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				default: 'LOAN_CREATED',
				description: 'The event to listen to',
				options: [
					{
						name: 'Lead Created',
						value: 'LEAD_CREATED',
						description: 'Triggered when a new lead is created',
					},
					{
						name: 'Lead Updated',
						value: 'LEAD_UPDATED',
						description: 'Triggered when a lead is updated',
					},
					{
						name: 'Loan Application Submitted',
						value: 'LOAN_APP_SUBMITTED',
						description: 'Triggered when a loan application is submitted',
					},
					{
						name: 'Loan Archived',
						value: 'LOAN_ARCHIVED',
						description: 'Triggered when a loan is archived',
					},
					{
						name: 'Loan Created',
						value: 'LOAN_CREATED',
						description: 'Triggered when a new loan is created',
					},
					{
						name: 'Loan Date Changed',
						value: 'LOAN_DATE_CHANGED',
						description: 'Triggered when a loan date is changed',
					},
					{
						name: 'Loan Stage Changed',
						value: 'LOAN_STAGE_CHANGED',
						description: 'Triggered when a loan stage changes',
					},
					{
						name: 'Loan Trackers Updated',
						value: 'LOAN_TRACKERS_UPDATED',
						description: 'Triggered when loan trackers are updated',
					},
				],
			},
		],
	};

	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;

				try {
					const response = await ariveApiRequest.call(this, 'GET', '/api/hooks');
					const webhooks = response || [];

					for (const webhook of webhooks) {
						if (webhook.WebhookUrl === webhookUrl && webhook.Event === event) {
							// Set webhook id for deletion
							const webhookData = this.getWorkflowStaticData('node');
							webhookData.webhookId = webhook.Id;
							return true;
						}
					}
				} catch (error) {
					return false;
				}

				return false;
			},

			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default') as string;
				const event = this.getNodeParameter('event') as string;

				const body: IDataObject = {
					WebhookUrl: webhookUrl,
					Event: event,
				};

				const response = await ariveApiRequest.call(this, 'POST', '/api/hooks/subscribe', body);

				if (response.Id === undefined) {
					return false;
				}

				const webhookData = this.getWorkflowStaticData('node');
				webhookData.webhookId = response.Id;

				return true;
			},

			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				if (webhookData.webhookId !== undefined) {
					try {
						await ariveApiRequest.call(
							this,
							'DELETE',
							`/api/hooks/unsubscribe/${webhookData.webhookId}`,
						);
					} catch (error) {
						return false;
					}

					delete webhookData.webhookId;
				}

				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		const bodyData = req.body as IDataObject;
		const headerData = this.getHeaderData() as IDataObject;

		// Verify webhook signature if present
		const webhookSignature = headerData['x-arive-signature'] as string;
		if (webhookSignature) {
			// Add signature verification logic here if Arive provides it
			// For now, we'll accept all webhooks from configured sources
		}

		return {
			workflowData: [this.helpers.returnJsonArray(bodyData)],
		};
	}
}
