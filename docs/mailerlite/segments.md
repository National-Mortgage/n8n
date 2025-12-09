 Segments
#
List all segments

If you want to list all segments in your account, send this GET request

GET https://connect.mailerlite.com/api/segments

#
Request parameters
Parameter	Type	Required	Limitations
limit	integer	no	An account can have at most a 250 segments
page	integer	no	Count starts from 1
#
Response

Response Code: 200 OK

{
  "data": [
    {
      "id": "1",
      "name": "Dummy segment",
      "total": 21,
      "open_rate": {
        "float": 0,
        "string": "0%"
      },
      "click_rate": {
        "float": 0,
        "string": "0%"
      },
      "created_at": "2021-08-06 10:17:45"
    }
  ],
  "links": {
    "first": "https://connect.mailerlite.com/api/segments?page=1",
    "last": "https://connect.mailerlite.com/api/segments?page=1",
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
        "url": "https://connect.mailerlite.com/api/segments?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "https://connect.mailerlite.com/api/segments",
    "per_page": 25,
    "to": 1,
    "total": 1
  }
}

#
Get subscribers belonging to a segment

If you want to get all subscribers belonging to a segment, send this GET request

GET https://connect.mailerlite.com/api/segments/{segment_id}/subscribers

#
Request
Parameter	Type	Required	Limitations
filter[status]	string	no	Must be one of the possible statuses: active, unsubscribed, unconfirmed, bounced or junk. Defaults to active.
limit	integer	no
after	integer	no	The last subscriber id, available in meta.last
cursor	string	no	Defaults to first page. Cursor value available in response body

{
  "data": [
    {
      "id": "1",
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
  ],
  "links": {
    "first": null,
    "last": null,
    "prev": "https://connect.mailerlite.com/api/segments/1234567890/subscribers?cursor=eyJpZCI6NzI1ODIxNjQ2NDU5Mzg1NTksIl9wb2ludHNUb05leHRJdGVtcyI6ZmFsc2V9",
    "next": "https://connect.mailerlite.com/api/segments/1234567890/subscribers?cursor=eyJpZCI6NzI1ODIxNjQ2NDY5ODcxMzYsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0"
  },
  "meta": {
    "path": "https://connect.mailerlite.com/api/segments/1234567890/subscribers",
    "per_page": 25,
    "next_cursor": "eyJpZCI6NzI1ODIxNjQ2NDY5ODcxMzYsIl9wb2ludHNUb05leHRJdGVtcyI6dHJ1ZX0",
    "prev_cursor": "eyJpZCI6NzI1ODIxNjQ2NDU5Mzg1NTksIl9wb2ludHNUb05leHRJdGVtcyI6ZmFsc2V9"
  }
}

#
Error

Response code: 404 Not Found

#
Update segment

If you want to update a segment use this PUT endpoint

PUT https://connect.mailerlite.com/api/segments/{segment_id}

The id must a valid segment id that belongs to the account
#
Request parameters
Parameter	Type	Required	Limitations
name	string	yes	Maximum length of 255 characters
#
Response

Response code: 200 OK

{
  "data": {
    "id": "1",
    "name": "Dummy segment",
    "total": 21,
    "open_rate": {
      "float": 0,
      "string": "0%"
    },
    "click_rate": {
      "float": 0,
      "string": "0%"
    },
    "created_at": "2021-08-06 10:17:45"
  }
}

#
Error

When the segment id is invalid

Response code: 404 Not Found

If invalid data has been passed

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "type": ["The name may not be greater than 255 characters."]
  }
}

#
Delete segment

If you wish to delete a segment, use this DELETE endpoint

DELETE https://connect.mailerlite.com/api/segments/{segment_id}

The id must a valid segment id that belongs to the account
#
Response

Response code: 204 No Content

#
Error

When the segment id is invalid

Response code: 404 Not Found
