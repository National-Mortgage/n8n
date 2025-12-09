 Fields

Fields can be assigned to subscribers
#
List all fields

If you want to list all of your fields, use this GET endpoint

GET https://connect.mailerlite.com/api/fields

#
Request parameters
Parameter	Type	Required	Limitations
limit	integer	no	An account can have at most a 100 groups
page	integer	no	Count starts from 1
filter[keyword]	string	no	Returns partial matches
filter[type]	string	no	Can be one of the following: text, number or date
sort	string	no	Can be one of: name, type, Defaults to ascending order; prepend -, e.g. -name for descending order.
#
Response

Response Code: 200 OK

{
  "data": [
    {
      "id": "1",
      "name": "new field",
      "key": "new_field",
      "type": "text"
    }
  ],
  "links": {
    "first": "https://connect.mailerlite.com/api/fields?page=1",
    "last": "https://connect.mailerlite.com/api/fields?page=1",
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
        "url": "https://connect.mailerlite.com/api/fields?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Next &raquo;",
        "active": false
      }
    ],
    "path": "https://connect.mailerlite.com/api/fields",
    "per_page": 100,
    "to": 1,
    "total": 1
  }
}

#
Create a field

If you want to create a field that can be assigned to subscribers, use this POST request

POST https://connect.mailerlite.com/api/fields

#
Request body
Parameter	Type	Required	Limitations
name	string	yes	Maximum length of 255 characters
type	string	yes	Can be text, number or date
#
Response

Response Code: 200 OK

{
  "data": {
    "id": "1",
    "name": "new field",
    "key": "new_field",
    "type": "text"
  }
}

#
Error

If invalid data has been passed

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "type": ["The selected type is invalid."]
  }
}

#
Update a field

If you want to update a field, use this PUT request

PUT https://connect.mailerlite.com/api/fields/{field_id}

#
Request body
Parameter	Type	Required	Limitations
name	string	yes	Maximum length of 255 characters
#
Response

Response Code: 200 OK

{
  "data": {
    "id": "1",
    "name": "new field",
    "key": "new_field",
    "type": "text"
  }
}

#
Error

If invalid data has been passed

Response Code: 422 Unprocessable Entity

{
  "message": "The given data was invalid.",
  "errors": {
    "type": ["The name may not be greater than 255 characters."]
  }
}

#
Delete a field

If you want to delete a field, use this DELETE request

DELETE https://connect.mailerlite.com/api/fields/{field_id}

#
Response

Response code: 204 No Content

#
Error

Response Code: 404 Not found
