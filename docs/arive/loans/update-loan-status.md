Update Loan Status
patch
https://gwapiconnect.myarive.com/api/loans/{id}

Update Loan Status
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
loanStages
array[object]
required

Loan Stages
stage
string
required

Stage Name
Allowed values:
APPLICATION_INTAKEQUALIFICATIONPREAPPROVEDLOAN_SETUPDISCLOSURE_SENTUNDERWRITING_SUBMITTEDAPPROVED_WITH_CONDITIONRE_SUBMITTALCLEAR_TO_CLOSEDOCS_OUTDOCS_SIGNEDLOAN_FUNDEDBROKER_CHECK_RECEIVEDCOMMISSION_PAIDSUSPENDED
stageDate
string
required

Stage Date
current
boolean
required

Is Current Stage?
Default:
false
intentToProceedDate
string

Intent To Proceed Date
lenderLoanNumber
string

Lender Loan Number
lenderNMLS
string

Lender NMLS (It will not be updated in ARIVE if it is already present in the Loan)
compensationAmt
string

Compensation Amount
compensationPaidBy
string

Compensation Paid By
Allowed values:
BorrowerInvestorLenderSellerOther
crmReferenceId
string

CRM Reference Id
Responses
200
401
404

Update Successful
Body
ariveLoanId
number

ARIVE Display Loan Id
code
string

Request Response Code
status
number

Request Status
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
string<date-time>

Loan Created At
originatorEmail
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
  "loanStages": [
    {
      "stage": "APPLICATION_INTAKE",
      "stageDate": "string",
      "current": false
    }
  ],
  "intentToProceedDate": "string",
  "lenderLoanNumber": "string",
  "lenderNMLS": "string",
  "compensationAmt": "string",
  "compensationPaidBy": "Borrower",
  "crmReferenceId": "string"
}

{

  "loanStages": [

    {

      "stage": "APPLICATION_INTAKE",

      "stageDate": "string",

      "current": false

    }

  ],

  "intentToProceedDate": "string",

  "lenderLoanNumber": "string",

  "lenderNMLS": "string",

  "compensationAmt": "string",

  "compensationPaidBy": "Borrower",

  "crmReferenceId": "string"

}

curl --request PATCH \
  --url https://gwapiconnect.myarive.com/api/loans/{id} \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "loanStages": [
    {
      "stage": "APPLICATION_INTAKE",
      "stageDate": "string",
      "current": false
    }
  ],
  "intentToProceedDate": "string",
  "lenderLoanNumber": "string",
  "lenderNMLS": "string",
  "compensationAmt": "string",
  "compensationPaidBy": "Borrower",
  "crmReferenceId": "string"
}'

{

  "ariveLoanId": 0,

  "code": "string",

  "status": 0,

  "message": "string",

  "sysGUID": "string",

  "deepLinkURL": "string",

  "createDateTime": "2019-08-24T14:15:22Z",

  "originatorEmail": "string",

  "crmReferenceId": "string"

}
