Unsubscribe from ARIVE Events
delete
https://gwapiconnect.myarive.com/api/hooks/unsubscribe/{id}

Unsubscribe from hooks
Request

Enter Access Token

Provide your bearer token in the Authorization header when making requests to protected resources.

Example: Authorization: Bearer 123
Path Parameters
id
string
required
Headers
X-API-KEY
string
required

ARIVE API Key
Responses
200
Token
:
id*
:
X-API-KEY*
:

curl --request DELETE \
  --url https://gwapiconnect.myarive.com/api/hooks/unsubscribe/{id} \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '
