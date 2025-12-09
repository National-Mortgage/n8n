Groups

You can see your existing groups or get the list of subscribers belonging to a given group
#
List all groups

If you want to list all of your groups, you can send this GET request

GET https://connect.mailerlite.com/api/groups

#
Request parameters
Parameter	Type	Required	Limitations
limit	integer	no	An account can have at most a 1000 groups
page	integer	no	Count starts from 1
filter[name]	string	no	Returns partial matches
sort	string	no	Can be one of: name, total, open_rate, click_rate, created_at. Defaults to ascending order; prepend -, e.g. -total for descending order.
#
Response

Response Code: 200 OK

{
  "data": [
    {
      "id": "1",
      "name": "dummy group",
      "active_count": 0,
      "sent_count": 0,
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
      "created_at": "2022-05-24 11:52:55"
    }
  ],
  "links": {
    "first": "https://connect.mailerlite.com/api/groups?page=1",
    "last": "https://connect.mailerlite.com/api/groups?page=1",
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
        "url": "https://connect.mailerlite.com/api/groups?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "https://connect.mailerlite.com/api/groups",
    "per_page": 100,
    "to": 1,
    "total": 1
  }
}

#
Create a group

If you want to create a group, you can send this POST request

POST https://connect.mailerlite.com/api/groups

#
Request
Parameter	Type	Required	Limitations
name	string	yes	Maximum length of 255 characters
#
Response

Response Code: 201 Created

{
  "data": {
    "id": "1",
    "name": "dummy group",
    "active_count": 0,
    "sent_count": 0,
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
    "created_at": "2022-05-25 14:22:44"
  }
}

#
Error

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "name": ["The name may not be greater than 255 characters."]
  }
}

#
Update a group

If you want to update a group you can send this PUT request

PUT https://connect.mailerlite.com/api/groups/{group_id}

#
Request
Parameter	Type	Required	Limitations
name	string	yes	Maximum length of 255 characters
#
Response

Response Code: 200 OK

{
  "data": {
    "id": "1",
    "name": "dummy group",
    "active_count": 0,
    "sent_count": 0,
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
    "created_at": "2022-05-25 14:22:44"
  }
}

#
Error

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "name": ["The name may not be greater than 255 characters."]
  }
}

#
Delete group

If you want to delete a group, send this DELETE request

DELETE https://connect.mailerlite.com/api/groups/{group_id}

#
Response

Response code: 204 No Content

#
Error

Response Code: 404 Not found

#
Get subscribers belonging to a group

If you want to get all subscribers belonging to a group, send this GET request

GET https://connect.mailerlite.com/api/groups/{group_id}/subscribers

#
Request
Parameter	Type	Required	Limitations
filter[status]	string	no	Must be one of the possible statuses: active, unsubscribed, unconfirmed, bounced or junk. Defaults to active.
limit	integer	no	Number of subscribers to return per page. Defaults to 50. Maximum is 1000.
cursor	string	no	Defaults to first page. Use meta.next_cursor or meta.prev_cursor from response to navigate.
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
    "prev": "https://connect.mailerlite.com/api/groups/1234567890/subscribers?cursor=eyJpZCI6NzI1ODIxNjQ2NDU5Mzg1NTksIl9wb2ludHNUb05leHRJdGVtcyI6ZmFsc2V9",
    "next": "https://connect.mailerlite.com/api/groups/1234567890/subscribers?cursor=eyJpZCI6NzI1ODIxNjQ2NDY5ODcxMzYsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0"
  },
  "meta": {
    "path": "https://connect.mailerlite.com/api/groups/1234567890/subscribers",
    "per_page": 25,
    "next_cursor": "eyJpZCI6NzI1ODIxNjQ2NDY5ODcxMzYsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0",
    "prev_cursor": "eyJpZCI6NzI1ODIxNjQ2NDU5Mzg1NTksIl9wb2ludHNUb05leHRJdGVtcyI6ZmFsc2V9"
  }
}

#
Error

Response Code: 404 Not found

#
Assign subscriber to a group

If you want to assign an existing subscriber to a group, send this POST request

POST https://connect.mailerlite.com/api/subscribers/{subscriber_id}/groups/{group_id}

#
Request
Parameter	Type	Required	Limitations
subscriber_id	integer	yes	Must be an existing subscriber id
group_id	integer	yes	Must be an existing group id
#
Response

Response Code: 200 OK / 201 Created

{
  "data": {
    "id": "1",
    "name": "dummy group",
    "active_count": 0,
    "sent_count": 0,
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
    "created_at": "2022-05-25 14:22:44"
  }
}

#
Error

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "id": ["The selected id is invalid."]
  }
}

#
Unassign subscriber from a group

If you want to unassign an existing subscriber from a group, send this DELETE request

DELETE https://connect.mailerlite.com/api/subscribers/{subscriber_id}/groups/{group_id}

#
Request
Parameter	Type	Required	Limitations
subscriber_id	integer	yes	Must be an existing subscriber id
group_id	integer	yes	Must be an existing group id on the account
#
Response

Response Code: 204 No Content

#
Error

Response Code: 404 Not Found

{
  "message": ""
}

#
Import bulk subscribers to group

Use this request to bulk import subscribers to a group. The response is a URL to check the import's progress.

POST https://connect.mailerlite.com/api/groups/{group_id}/import-subscribers

#
Request
Parameter	Type	Required	Limitations
subscribers	array	yes	Must be an array of subscribers objects.
subscribers.*.email	string	yes	Valid email address as per RFC 2821
subscribers.*.fields	object	no	Object keys must correspond to default or custom field name. Values can only be added this way and will not be removed by omission.
#
Response

Response Code: 200 OK

{
  "import_progress_url": "https://connect.mailerlite.com/api/subscribers/import/100000000000000000"
}

#
Response import progress

The response shows a maximum of 5 sample subscribers in arrays.

Response Code: 200 OK

{
  "data": {
    "id": "100000000000000000",
    "account_id": "1",
    "total": 100,
    "processed": 100,
    "imported": 100,
    "updated": 0,
    "errored": 0,
    "percent": 100,
    "done": true,
    "invalid": [],
    "invalid_count": 0,
    "mistyped": [],
    "mistyped_count": 0,
    "changed": [],
    "changed_count": 0,
    "unchanged": [],
    "unchanged_count": 0,
    "unsubscribed": [],
    "unsubscribed_count": 0,
    "role_based": [],
    "role_based_count": 0,
    "suspicious_format": [],
    "suspicious_format_count": 0,
    "duplicate": [],
    "duplicate_count": 0,
    "banned_import_emails_count": 0,
    "updated_at": "2024-07-01T01:01:01.000000Z",
    "undone_at": null,
    "stopped_at": null,
    "undo_started_at": null,
    "finished_at": "2024-07-01T01:30:01.000000Z"
  }
}
