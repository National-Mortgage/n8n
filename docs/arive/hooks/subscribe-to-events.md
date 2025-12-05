Subscribe to ARIVE Events
post
https://gwapiconnect.myarive.com/api/hooks/subscribe

Supported Webhook Events:

    LOAN_CREATED: A new Loan file is created in ARIVE
    LOAN_ARCHIVED: Loan is Archived in ARIVE
    LOAN_STAGE_CHANGED: Loan Status is updated in ARIVE.
    LOAN_DATE_CHANGED: Any dates (except status dates) are changed on Audit & Dates screen in ARIVE
    LOAN_TRACKERS_UPDATED: Appraisal, HOI or Title Trackers are updated in Loan Center
    LOAN_APP_SUBMITTED: A Loan Application is submitted from POS
    LEAD_CREATED: A new Lead is created in ARIVE
    LEAD_UPDATED: Lead is updated in ARIVE

Each webhook event will contain a Loan/Lead Id and type of event in the request body, The client application can then use the Get Loan or Get Lead API to get updated loan data.
Request
Headers
X-API-KEY
string
required

ARIVE API Key
Body
WebhookUrl
string
required

Webhook Target URL
Event
string
required

Event Name
Allowed values:
LOAN_CREATEDLOAN_UPDATED
Responses
201
Token
:
X-API-KEY*
:
{
  "WebhookUrl": "string",
  "Event": "LOAN_CREATED"
}

{

  "WebhookUrl": "string",

  "Event": "LOAN_CREATED"

}

curl --request POST \
  --url https://gwapiconnect.myarive.com/api/hooks/subscribe \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "WebhookUrl": "string",
  "Event": "LOAN_CREATED"
}'
