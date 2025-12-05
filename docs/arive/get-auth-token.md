Get Auth token
post
https://gwapiconnect.myarive.com/api/auth/access-token

Use of the AEP APIs requires 3 Parameters

    ClientId,

    Access Token, and

    API Key

AEP APIs uses JSON Web Tokens (JWTs) to authenticate requests. In addition to JWT, all API requests require the API key to be sent with a X-API-KEY header. The JWT token will grant access to all the loans which are in the Company Admin/Owner's pipeline.
Request
Headers
X-API-KEY
string
required

ARIVE API Key
Body
clientId
string
required

Client ID (Issued by ARIVE)
secret
string
required

Secret Access Key
apiKey
string
required

API Key
Responses
200
401

Valid Credentials
Body
AccessToken
string
required

Access Token
ExpiresIn
number
required

Expiration (in seconds)
TokenType
string
required

Token Type
X-API-KEY*
:
{
  "clientId": "string",
  "secret": "string",
  "apiKey": "string"
}

{

  "clientId": "string",

  "secret": "string",

  "apiKey": "string"

}

curl --request POST \
  --url https://gwapiconnect.myarive.com/api/auth/access-token \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "clientId": "string",
  "secret": "string",
  "apiKey": "string"
}'

{

  "AccessToken": "string",

  "ExpiresIn": 0,

  "TokenType": "string"

}
