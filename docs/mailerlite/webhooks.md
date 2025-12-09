 Webhooks

Webhooks allow you to subscribe to real-time notifications about various events that occur in MailerLite. For example, when a new subscriber is added to your account, HTTP POST callback is sent to your provided URL with a payload containing the new subscriber. It allows you to get the most recent updates without constantly polling the API. You can see your existing webhooks, create new, update and delete them.
#
Available events
Event	Description
subscriber.created	Fires when a new subscriber is added to an account.
subscriber.updated	Fires when any of the subscriber's custom fields are updated or when they confirm their subscription.
subscriber.unsubscribed	Fires when a subscriber becomes unsubscribed.
subscriber.added_to_group	Fires when a subscriber is added to a group.
subscriber.removed_from_group	Fires when a subscriber is removed from a group.
subscriber.bounced	Fires when an email address bounces.
subscriber.automation_triggered	Fires when a subscriber starts an automation.
subscriber.automation_completed	Fires when a subscriber finishes an automation.
subscriber.spam_reported	Fires when a subscriber marks a campaign as spam.
subscriber.deleted	Fires when a subscriber is set as deleted or forgotten. The batchable option is required for this webhook and must be set as true.
subscriber.active	Fires when a subscriber status is set to active.
campaign.sent	Fires when a campaign is sent.
campaign.click	Fires when a subscriber clicks a link in a campaign. The batchable option is required for this webhook and must be set as true.
campaign.open	Fires when a subscriber opens a campaign. The batchable option is required for this webhook and must be set as true.
#
Delivery, attempts and retries

Webhooks are only delivered for active accounts.

A webhook event is considered delivered when your webserver responds with 2XX status code. Make sure you don't return 4XX or 5XX status codes as part of your business logic, as you will keep getting duplicate webhook events.

Your webserver should respond in less than 3 seconds, otherwise webhook is considered failed. For this reason you should not do any heavy processing in the same request cycle and offload it to a different process.

Upon failure (timeout or non-2XX status code) webhook events are retried three more times with 10, 100, and finally 1000 seconds delay.
#
Security

Webhook requests include Signature header, its value is HMAC (sha256) which is generated from payload JSON using webhook's secret. You can check its validity in order to be guaranteed that a request is sent from our side.

An example of a function which produces a signature in PHP:

public function generateSignature(string $jsonPayload, string $secret): string
{
    return hash_hmac('sha256', $jsonPayload, $secret);
}

#
List all webhooks

GET https://connect.mailerlite.com/api/webhooks

#
Response

Response code: 200 OK

{
  "data": [
    {
      "id": "68079566047937883",
      "name": "Test 2",
      "url": "http://google.com",
      "events": [
        "subscriber.created"
      ],
      "enabled": true,
      "secret": "ybmcD7PQ9R",
      "created_at": "2022-10-04 23:22:13",
      "updated_at": "2022-10-04 23:54:04",
      "batchable": true
    },
    {
      "id": "68078863100413274",
      "name": "Test",
      "url": "http://google.com",
      "events": [
        "subscriber.created"
      ],
      "enabled": true,
      "secret": "9JVEvb07Yq",
      "created_at": "2022-10-04 23:11:03",
      "updated_at": "2022-10-04 23:11:03",
      "batchable": false
    },
    {
      "id": "68078820398204249",
      "name": "Test",
      "url": "http://google.com",
      "events": [
        "subscriber.created"
      ],
      "enabled": true,
      "secret": "yXIrayUCWJ",
      "created_at": "2022-10-04 23:10:22",
      "updated_at": "2022-10-04 23:10:22",
      "batchable": true
    },
    {
      "id": "68074372003267924",
      "name": "Eveniet vero minus.",
      "url": "http://www.marvin.com/omnis-accusamus-est-rem-delectus-quaerat.html",
      "events": [
        "subscriber.bounced"
      ],
      "enabled": true,
      "secret": "Kn556GohSH",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": false
    },
    {
      "id": "68074372003267926",
      "name": "Et voluptatibus et est voluptatibus.",
      "url": "http://harber.net/ipsa-molestias-voluptatem-fugiat-quis-tempora-ullam.html",
      "events": [
        "subscriber.automation_completed"
      ],
      "enabled": true,
      "secret": "WXS0dF3FHc",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372005365080",
      "name": "Perferendis dolorem aut nulla.",
      "url": "http://www.brekke.com/",
      "events": [
        "subscriber.added_to_group"
      ],
      "enabled": true,
      "secret": "Ko17Uw3hiB",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372004316503",
      "name": "Tenetur delectus eum fugiat.",
      "url": "http://www.cartwright.info/eligendi-soluta-corporis-in-quod-ullam",
      "events": [
        "subscriber.bounced"
      ],
      "enabled": true,
      "secret": "4jQ3Y4UlLI",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372001170769",
      "name": "Tempore voluptatem et voluptas.",
      "url": "http://www.pfeffer.net/quod-voluptatibus-explicabo-nihil-ipsum-accusamus-error",
      "events": [
        "subscriber.removed_from_group"
      ],
      "enabled": true,
      "secret": "hvHGn2D4yu",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372001170770",
      "name": "Vel inventore rem.",
      "url": "http://kautzer.com/consequatur-neque-eaque-ad-et-rem-labore-ut.html",
      "events": [
        "subscriber.created"
      ],
      "enabled": true,
      "secret": "xbzp318Djs",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372003267925",
      "name": "Voluptas animi consequatur.",
      "url": "http://www.oconner.org/laudantium-ipsa-ad-distinctio-eos-quasi-dicta.html",
      "events": [
        "campaign.sent"
      ],
      "enabled": true,
      "secret": "3b1EMAhuoT",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074371998025039",
      "name": "Expedita esse est fugit.",
      "url": "https://www.deckow.com/aut-quae-voluptate-ab-qui-qui",
      "events": [
        "subscriber.removed_from_group"
      ],
      "enabled": true,
      "secret": "QbVgXU0L93",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372000122192",
      "name": "Autem culpa perferendis quaerat.",
      "url": "http://homenick.biz/tempora-asperiores-qui-alias-voluptas-eos-necessitatibus-et",
      "events": [
        "subscriber.automation_completed"
      ],
      "enabled": true,
      "secret": "N3cZ5WO2ep",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68074372002219347",
      "name": "Officia quia aut.",
      "url": "https://www.cartwright.org/mollitia-corporis-ipsam-reiciendis-dolor-error-amet-velit",
      "events": [
        "subscriber.updated"
      ],
      "enabled": true,
      "secret": "xRyma5WnWP",
      "created_at": "2022-10-04 21:59:40",
      "updated_at": "2022-10-04 21:59:40",
      "batchable": true
    },
    {
      "id": "68079566047937234",
      "name": "Campaign Open",
      "url": "http://google.com",
      "events": [
        "campaign.open"
      ],
      "enabled": true,
      "secret": "ybmcD7PQ9R",
      "created_at": "2022-10-04 23:22:13",
      "updated_at": "2022-10-04 23:54:04",
      "batchable": true
    },
    {
      "id": "68079566047937324",
      "name": "Campaign link clicked",
      "url": "http://google.com",
      "events": [
        "campaign.click"
      ],
      "enabled": true,
      "secret": "ybmcD7PQ9R",
      "created_at": "2022-10-04 23:22:13",
      "updated_at": "2022-10-04 23:54:04",
      "batchable": true
    },
    {
      "id": "68079566047937325",
      "name": "Subscriber deleted",
      "url": "http://google.com",
      "events": [
        "subscriber.deleted"
      ],
      "enabled": true,
      "secret": "ybmcD7PQ9o",
      "created_at": "2022-10-04 23:22:13",
      "updated_at": "2022-10-04 23:54:04",
      "batchable": true
    },
    {
      "id": "68079566047937321",
      "name": "Subscriber deleted",
      "url": "http://google.com",
      "events": [
        "subscriber.active"
      ],
      "enabled": true,
      "secret": "ybmcD7PQ1o",
      "created_at": "2022-10-04 23:22:13",
      "updated_at": "2022-10-04 23:54:04",
      "batchable": false
    }
  ],
  "links": {
    "first": "http://localhost:8080/api/webhooks?page=1",
    "last": "http://localhost:8080/api/webhooks?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "links": [
      {
        "url": null,
        "label": "&laquo; Previous",
        "active": false
      },
      {
        "url": "http://localhost:8080/api/webhooks?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "http://localhost:8080/api/webhooks",
    "per_page": 50,
    "to": 13,
    "total": 13
  }
}

#
Get a webhook

GET https://connect.mailerlite.com/api/webhooks/{webhook_id}

#
Response

Response code: 200 OK

{
  "data": {
    "id": "68074372004316503",
    "name": "Tenetur delectus eum fugiat.",
    "url": "http://www.cartwright.info/eligendi-soluta-corporis-in-quod-ullam",
    "events": [
      "subscriber.bounced"
    ],
    "enabled": true,
    "secret": "4jQ3Y4UlLI",
    "created_at": "2022-10-04 21:59:40",
    "updated_at": "2022-10-04 21:59:40",
    "batchable": false
  }
}

#
Error

When providing an invalid webhook id

Response code: 404 Not Found

#
Create a webhook

POST https://connect.mailerlite.com/api/webhooks

#
Request body
Parameter	Type	Required	Limitations
name	string	no
events	array	yes	Must be one of the events described in following table
url	string	yes
enabled	boolean	no
batchable	boolean	no	Required as true only for campaign.open and campaign.click events
#
Response

Response code: 200 OK

{
  "data": {
    "id": "68074372004316503",
    "name": "Tenetur delectus eum fugiat.",
    "url": "http://www.cartwright.info/eligendi-soluta-corporis-in-quod-ullam",
    "events": [
      "subscriber.bounced"
    ],
    "enabled": true,
    "secret": "4jQ3Y4UlLI",
    "created_at": "2022-10-04 21:59:40",
    "updated_at": "2022-10-04 21:59:40",
    "batchable": false
  }
}

#
Update a webhook

PUT https://connect.mailerlite.com/api/webhooks/{webhook_id}

#
Request body
Parameter	Type	Required	Limitations
name	string	no
events	array	no
url	string	no
enabled	boolean	no
batchable	boolean	no	Required as true only for campaign.open and campaign.click events
#
Response

Response code: 200 OK

{
  "data": {
    "id": "68074372004316503",
    "name": "Tenetur delectus eum fugiat.",
    "url": "http://www.cartwright.info/eligendi-soluta-corporis-in-quod-ullam",
    "events": [
      "subscriber.bounced"
    ],
    "enabled": true,
    "secret": "4jQ3Y4UlLI",
    "created_at": "2022-10-04 21:59:40",
    "updated_at": "2022-10-04 21:59:40",
    "batchable": false
  }
}

#
Delete a webhook

DELETE https://connect.mailerlite.com/api/webhooks/{webhook_id}

#
Response

Response code: 204 No Content

#
Payloads

Examples of webhooks data you can receive

subscriber.created
Show payload details

subscriber.updated
Show payload details

subscriber.unsubscribed
Show payload details

subscriber.added_to_group
Show payload details

subscriber.removed_from_group
Show payload details

subscriber.bounced
Show payload details

subscriber.automation_triggered
Show payload details

subscriber.automation_completed
Show payload details

subscriber.spam_reported
Show payload details

campaign.sent
Show payload details

campaign.open
Show payload details

campaign.click
Show payload details

subscriber.deleted
Show payload details

subscriber.active
Show payload details

#
Batched payloads
Show batched payload details

{
  "events": [
    {
      "type": "campaign.open",
      "subscriber": {
        "id": "100000000000000000",
        "email": "john.doe@example.com",
        "status": "active",
        "source": "ecommerce",
        "sent": 5,
        "opens_count": 0,
        "clicks_count": 0,
        "open_rate": 0,
        "click_rate": 0,
        "ip_address": null,
        "subscribed_at": "2024-05-08T08:26:04.000000Z",
        "unsubscribed_at": null,
        "created_at": "2024-05-08T08:26:04.000000Z",
        "updated_at": "2024-05-28T10:30:29.000000Z",
        "deleted_at": null,
        "forget_at": null,
        "fields": {
          "name": "",
          "last_name": "",
          "company": "",
          "country": "",
          "city": "",
          "phone": "",
          "state": "",
          "zip": ""
        },
        "opted_in_at": null,
        "optin_ip": null
      },
      "campaign": {
        "id": "100000000000000000",
        "name": "Campaign Example",
        "total_recipients": 100,
        "preview_url": "https://preview_url",
        "date": "2024-05-28T07:11:08.000000Z"
      }
    },
    {
      "type": "campaign.open",
      "subscriber": {
        "id": "100000000000000000",
        "email": "john.doe@example.com",
        "status": "active",
        "source": "ecommerce",
        "sent": 5,
        "opens_count": 0,
        "clicks_count": 0,
        "open_rate": 0,
        "click_rate": 0,
        "ip_address": null,
        "subscribed_at": "2024-05-08T08:26:04.000000Z",
        "unsubscribed_at": null,
        "created_at": "2024-05-08T08:26:04.000000Z",
        "updated_at": "2024-05-28T10:30:29.000000Z",
        "deleted_at": null,
        "forget_at": null,
        "fields": {
          "name": "",
          "last_name": "",
          "company": "",
          "country": "",
          "city": "",
          "phone": "",
          "state": "",
          "zip": ""
        },
        "opted_in_at": null,
        "optin_ip": null
      },
      "campaign": {
        "id": "100000000000000000",
        "name": "Campaign Example",
        "total_recipients": 100,
        "preview_url": "https://preview_url",
        "date": "2024-05-28T07:11:08.000000Z"
      }
    }
  ],
  "total": 2
}

