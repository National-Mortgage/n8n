 Subscribers

You can add or update subscribers in your mailing list.
#
List all subscribers

If you want to list all of your subscribers, send this GET request

GET https://connect.mailerlite.com/api/subscribers

#
Request parameters
Parameter	Type	Required	Limitations
filter[status]	string	no	Must be one of the possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
limit	integer	no	Defaults to 25
cursor	string	no	Defaults to first page. Cursor value available in response body
include	string	no	Additional resources to include in the response. Currently, only groups is supported.
#
Response

{
  "data": [
    {
      "id": "31986843064993537",
      "email": "dummy@example.com",
      "status": "active",
      "source": "api",
      "sent": 0,
      "opens_count": 0,
      "clicks_count": 0,
      "open_rate": 0,
      "click_rate": 0,
      "ip_address": null,
      "subscribed_at": "2021-09-01 14:03:50",
      "unsubscribed_at": null,
      "created_at": "2021-09-01 14:03:50",
      "updated_at": "2021-09-01 14:03:50",
      "fields": {
        "city": null,
        "company": null,
        "country": null,
        "last_name": "Testerson",
        "name": "Dummy",
        "phone": null,
        "state": null,
        "z_i_p": null
      },
      "opted_in_at": null,
      "optin_ip": null
    }
  ],
  "links": {
     "first": null,
     "last": null,
     "prev": "https://connect.mailerlite.com/api/subscribers?cursor=eyJpZCI6NzI1ODIxNjQ2NDU5Mzg1NTksIl9wb2ludHNUb05leHRJdGVtcyI6ZmFsc2V9",
     "next": "https://connect.mailerlite.com/api/subscribers?cursor=eyJpZCI6NzI1ODIxNjQ2NDY5ODcxMzYsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0"
  },
  "meta": {
      "path": "https://connect.mailerlite.com/api/subscribers",
      "per_page": 25,
      "next_cursor": "eyJpZCI6NzI1ODIxNjQ2NDY5ODcxMzYsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0",
      "prev_cursor": "eyJpZCI6NzI1ODIxNjQ2NDU5Mzg1NTksIl9wb2ludHNUb05leHRJdGVtcyI6ZmFsc2V9"
  }
}

#
Create/upsert subscriber

If you want to create or update a subscriber, send this POST request

POST https://connect.mailerlite.com/api/subscribers

If a subscriber already exists, it will be updated with new values. This is non-destructive operation, so omitting fields or groups will not remove them from subscriber. However, please note that if the subscriber’s status is unsubscribed, bounced, or marked as junk, you will not be able to reactivate them due to abuse prevention measures. In such cases, the subscriber can only be reactivated through the app, a form, or a landing page.
#
Request
Parameter	Type	Required	Limitations
email	string	yes	Valid email address as per RFC 2821
fields	object	no	Object keys must correspond to default or custom field name. Values can only be added this way and will not be removed by omission.
groups	array	no	array must contain existing group ids. Subscriber can only be added to groups this way and will not be removed by omission
status	string	no	Can be one of the following: active, unsubscribed, unconfirmed, bounced, junk
subscribed_at	string	no	Must be a valid date in the format yyyy-MM-dd HH:mm:ss
ip_address	string	no	Must be a valid ip address
opted_in_at	string	no	Must be a valid date in the format yyyy-MM-dd HH:mm:ss
optin_ip	string	no	Must be a valid ip address
unsubscribed_at	string	no	Must be a valid date in the format yyyy-MM-dd HH:mm:ss
resubscribe	bool	no	Set to true to resubscribe previously unsubscribed subscribers

{
    "email": "dummy@example.com",
    "fields": {
      "name": "Dummy",
      "last_name": "Testerson"
    },
    "groups": [
        "4243829086487936",
        "14133878422767533",
        "31985378335392975"
    ]
}

#
Response

If the subscriber was created:

Response Code: 201 Created

If the subscriber with specified email was already in the mailing list:

Response Code: 200 OK

{
  "data": {
    "id": "31897397363737859",
    "email": "dummy@example.com",
    "status": "active",
    "source": "api",
    "sent": 0,
    "opens_count": 0,
    "clicks_count": 0,
    "open_rate": 0,
    "click_rate": 0,
    "ip_address": null,
    "subscribed_at": "2021-08-31 14:22:08",
    "unsubscribed_at": null,
    "created_at": "2021-08-31 14:22:08",
    "updated_at": "2021-08-31 14:22:08",
    "fields": {
      "city": null,
      "company": null,
      "country": null,
      "last_name": "Testerson",
      "name": "Dummy",
      "phone": null,
      "state": null,
      "z_i_p": null
    },
    "groups": [],
    "opted_in_at": null,
    "optin_ip": null
  }
}

#
Error

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "email": ["The email must be a valid email address."]
  }
}

#
Update a subscriber

If you want to update a single subscriber, send this PUT request:

PUT https://connect.mailerlite.com/api/subscribers/(:id)

If a subscriber already exists, their information will be updated. However, please note that if the subscriber’s status is unsubscribed, bounced, or marked as junk, you will not be able to reactivate them due to abuse prevention measures. In such cases, the subscriber can only be reactivated through the app, a form, or a landing page.
#
Request
Parameter	Type	Required	Limitations
fields	object	no	Object keys must correspond to default or custom field name. Values can only be added this way and will not be removed by omission.
groups	array	no	array containing existing group ids. Subscriber will be removed from unlisted groups
status	string	no	Can be one of the following: active, unsubscribed, unconfirmed, bounced, junk
subscribed_at	string	no	Must be a valid date in the format yyyy-MM-dd HH:mm:ss
ip_address	string	no	Must be a valid ip address
opted_in_at	string	no	Must be a valid date in the format yyyy-MM-dd HH:mm:ss
optin_ip	string	no	Must be a valid ip address
unsubscribed_at	string	no	Must be a valid date in the format yyyy-MM-dd HH:mm:ss

{
    "fields": {
      "name": "Dummy",
      "last_name": null
    },
    "groups": [
        "4243829086487936",
        "14133878422767533",
        "31985378335392975"
    ]
}

#
Response

Response Code: 200 OK

{
  "data": {
    "id": "31897397363737859",
    "email": "dummy@example.com",
    "status": "active",
    "source": "api",
    "sent": 0,
    "opens_count": 0,
    "clicks_count": 0,
    "open_rate": 0,
    "click_rate": 0,
    "ip_address": null,
    "subscribed_at": "2021-08-31 14:22:08",
    "unsubscribed_at": null,
    "created_at": "2021-08-31 14:22:08",
    "updated_at": "2021-08-31 14:22:08",
    "fields": {
      "city": null,
      "company": null,
      "country": null,
      "last_name": null,
      "name": "Dummy",
      "phone": null,
      "state": null,
      "z_i_p": null
    },
    "groups": [],
    "opted_in_at": null,
    "optin_ip": null
  }
}

#
Error

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "email": ["The email must be a valid email address."]
  }
}

#
Fetch a subscriber

If you want to fetch a subscriber, send this GET request

GET https://connect.mailerlite.com/api/subscribers/(:id or :email)

#
Request
Parameter	Type	Required	Limitations
email	string	no	Must provide either valid subscriber id or email
id	string	no	Must provide either valid subscriber id or email

GET https://connect.mailerlite.com/api/subscribers/31986843064993537
GET https://connect.mailerlite.com/api/subscribers/dummy@example.com

#
Response

If subscriber exists:

Response Code: 200 OK

{
  "data": {
    "id": "31986843064993537",
    "email": "dummy@example.com",
    "status": "active",
    "source": "api",
    "sent": 0,
    "opens_count": 0,
    "clicks_count": 0,
    "open_rate": 0,
    "click_rate": 0,
    "ip_address": null,
    "subscribed_at": "2021-09-01 14:03:50",
    "unsubscribed_at": null,
    "created_at": "2021-09-01 14:03:50",
    "updated_at": "2021-09-01 14:03:50",
    "fields": {
      "city": null,
      "company": null,
      "country": null,
      "last_name": "Testerson",
      "name": "Dummy",
      "phone": null,
      "state": null,
      "z_i_p": null
    },
    "groups": [],
    "opted_in_at": null,
    "optin_ip": null
  }
}

#
Error

If the subscriber cannot be found:

Response Code: 404 Not Found

#
Fetch total subscribers count

GET https://connect.mailerlite.com/api/subscribers?limit=0

#
Request
Parameter	Type	Required	Limitations
limit	integer	yes	Value must be 0
#
Response

Response Code: 200 OK

{
  "total": 100
}

#
Fetch subscriber activity

GET https://connect.mailerlite.com/api/subscribers/:id/activity-log

#
Request
Parameter	Type	Required	Limitations
id	string	yes	Must provide either valid subscriber id
filter[log_name]	string	no	Must be one of the possible log_name: campaign_send, automation_email_sent, email_open, link_click, email_bounce, spam_complaint, unsubscribed, email_forward, marketing_preferences_change or preference_center.
limit	integer	no	Defaults to 100
page	integer	no	Count starts from 1
#
Response

Response Code: 200 OK

{
  "data": [
    {
      "id": "1235",
      "log_name": "added_to_group",
      "subject_id": "1000000000000000",
      "subject_type": "subscribers",
      "properties": {
        "group_name": "test group",
        "group_id": "1"
      },
      "created_at": "2024-05-01 12:43:29",
      "updated_at": "2024-05-01 12:43:29"
    },
    {
      "id": "1234",
      "log_name": "activated",
      "subject_id": "1000000000000000",
      "subject_type": "subscribers",
      "properties": [],
      "created_at": "2024-05-01 12:43:29",
      "updated_at": "2024-05-01 12:43:29"
    },
    {
      "id": "123456",
      "log_name": "email_open",
      "subject_id": "123456",
      "subject_type": "opens",
      "properties": {
        "type": "campaigns",
        "campaign_id": "123456",
        "campaign_name": "Example name",
        "preview_url": "https://example_preview.url"
      },
      "created_at": "2024-09-01 00:00:00",
      "updated_at": "2024-09-01 00:00:00"
    }
  ]
}

#
Delete a subscriber

It will removes the subscriber from your account, but all their information is still kept in case they re-subscribe to your list. If you want to delete a subscriber, send this DELETE request

DELETE https://connect.mailerlite.com/api/subscribers/:id

#
Request
Parameter	Type	Required	Limitations
id	string	yes	Valid subscriber id for the account
#
Response

Response Code: 204 No Content

#
Error

Response Code: 404 Not Found

#
Forget a subscriber

It will removes the subscriber from your account and all information will be completely deleted in 30 days. This feature is GDPR compliant.If you want to forget a subscriber, send this POST request

POST https://connect.mailerlite.com/api/subscribers/:id/forget

#
Request
Parameter	Type	Required	Limitations
id	string	yes	Valid subscriber id for the account
#
Response

Response Code: 200 OK

{
  "message": "Subscriber data will be completely deleted and forgotten within 30 days.",
  "data": {
    "id": "85348545455981948",
    "email": "bashirian.wilhelmine@yahoo.com",
    "status": "active",
    "source": "subscribe app",
    "sent": 89,
    "opens_count": 0,
    "clicks_count": 0,
    "open_rate": 0,
    "click_rate": 0,
    "ip_address": "140.229.243.225",
    "subscribed_at": "2023-04-13 14:05:15",
    "unsubscribed_at": null,
    "created_at": "2023-04-13 14:05:15",
    "updated_at": "2023-04-19 05:40:50",
    "deleted_at": "2023-04-19 05:40:50",
    "forget_at": "2023-05-19 05:40:50",
    "fields": {
      "name": "Carmella",
      "last_name": "Hegmann",
      "company": "DuBuque Inc",
      "country": "Puerto Rico",
      "city": "Moshemouth",
      "phone": "1-628-782-7066",
      "state": null,
      "zip": null
    },
    "groups": [
      {
        "id": "85348546500363273",
        "name": "sint incidunt",
        "active_count": 20,
        "sent_count": 1284,
        "opens_count": 0,
        "open_rate": {
          "float": 0,
          "string": "0%"
        },
        "clicks_count": 0,
        "click_rate": {
          "float": 0,
          "string": "0%"
        },
        "unsubscribed_count": 0,
        "unconfirmed_count": 0,
        "bounced_count": 0,
        "junk_count": 0,
        "created_at": "2023-04-13 14:05:16",
        "processing": true,
        "used_in_forms": false,
        "used_in_sites": false
      }
    ],
    "location": {
      "id": "1",
      "title": "New York City",
      "country_name": "United States of America",
      "continent_name": "North America",
      "state_name": "New York",
      "time_zone": "America/New_York"
    },
    "opted_in_at": null,
    "optin_ip": null,
    "email_changed_at": null
  }
}

#
Error

Response code: 404 Not Found

#
Get single import

If you want to get a single import report, send this GET request

GET https://connect.mailerlite.com/api/subscribers/import/{import_id}

#
Response

Response Code: 200 OK

{
  "data": {
    "id": "47366063630845932",
    "total": 3,
    "processed": 3,
    "imported": 0,
    "updated": 0,
    "errored": 3,
    "percent": 100,
    "done": true,
    "file_path": "",
    "invalid": [],
    "invalid_count": 0,
    "mistyped": [],
    "mistyped_count": 0,
    "changed": [],
    "changed_count": 0,
    "unchanged": [
      {
        "id": "47366064023013357",
        "email": "dummy_one@import.com"
      },
      {
        "id": "47366064023013358",
        "email": "dummy_two+two@import.com"
      },
      {
        "id": "47366064023013359",
        "email": "dummy_three@new.com"
      }
    ],
    "unchanged_count": 3,
    "unsubscribed": [],
    "unsubscribed_count": 0,
    "role_based": [],
    "role_based_count": 0,
    "banned_import_emails_count": 0,
    "match_route": "",
    "source_label": "",
    "updated_at": "2022-02-18T08:09:58.000000Z",
    "undone_at": null,
    "stopped_at": null,
    "undo_started_at": null,
    "finished_at": "2022-02-18T08:09:58.000000Z"
  }
}
