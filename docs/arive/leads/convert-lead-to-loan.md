Convert Lead to Loan
post
https://gwapiconnect.myarive.com/api/leads/{id}/leadtoloan

Convert Lead to Loan
Request
Path Parameters
id
string
required
Query Parameters
sync
boolean

Avoid Polling
Default:
true
Headers
X-API-KEY
string
required

ARIVE API Key
Body
loanOfficerEmail
string
required

Loan Officer Email
Responses
201
401

The Lead has been successfully converted to Loan.
Body
ariveLeadId
number

ARIVE Display Lead Id
ariveLoanId
number

ARIVE Display Loan Id
code
string

Request Response Code
status
number

Request status
message
string

Request Message
sysGUID
string

ARIVE System GUID
deepLinkURL
string

Deep Link URL
createDateTime
string

Lead Created At
assigneeEmail
string

Originator Email
crmReferenceId
string

CRM Reference Id
Token
:
id*
:
sync
:
X-API-KEY*
:
{
  "loanOfficerEmail": "string"
}

{

  "loanOfficerEmail": "string"

}

curl --request POST \
  --url https://gwapiconnect.myarive.com/api/leads/{id}/leadtoloan \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "loanOfficerEmail": "string"
}'

{

  "ariveLeadId": 0,

  "ariveLoanId": 0,

  "code": "string",

  "status": 0,

  "message": "string",

  "sysGUID": "string",

  "deepLinkURL": "string",

  "createDateTime": "string",

  "assigneeEmail": "string",

  "crmReferenceId": "string"

}
