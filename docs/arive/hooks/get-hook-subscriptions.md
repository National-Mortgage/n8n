Get Hook Subscriptions
get
https://gwapiconnect.myarive.com/api/hooks

Get subscriptions for the authenticated user. Filtered by credential type used.
Request
Query Parameters
event
string
status
string
Headers
X-API-KEY
string
required

ARIVE API Key
Responses
200
Token
:
event
:
status
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/hooks \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '
