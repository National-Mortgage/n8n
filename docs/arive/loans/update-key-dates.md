Update Key Dates
patch
https://gwapiconnect.myarive.com/api/loans/{id}/key-dates

Update Key Dates
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
firstPaymentDate
appraisalOrderedDate
string

Appraisal Ordered Date
appraisalDeliveryDate
string

Appraisal Delivery Date
taxTranscriptOrderedDate
string

Tax Transcipt Ordered Date
taxTranscriptReceivedDate
string

Tax Transcript Received Date
titleOrderedDate
string

Title Ordered Date
titleReceivedDate
string

Title Received Date
hoiOrderedDate
string

HOI Ordered Date
hoiReceivedDate
string

HOI Received Date
preApprovalExpiryDate
string

Pre-Approval Expiry Date
tridDate
string

TRID Date
initialLESentDate
string

Initial LE Sent Date
initialLESignedDate
string

Initial LE Signed Date
mostRecentLESentDate
string

Most Recent LE Sent Date
mostRecentLESignedDate
string

Most Recent LE Signed Date
intentToProceedDate
string

Intent To Proceed Date
initialCDSentDate
string

Initial CD Sent Date
initialCDSignedDate
string

Initial CD Signed Date
mostRecentCDSentDate
string

Most Recent CD Sent Date
mostRecentCDSignedDate
string

Most Recent CD Signed Date
appraisalContingency
string

Appraisal Contingency Date
loanContingency
string

Loan Contingency Date
closingContingency
string

Closing Contingency Date
estFirstPaymentDate
string

Estimated First Payment Date
firstPaymentDate
string

First Payment Date
dateToAvoidEPO
string

Date to Avoid EPO
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
  "appraisalOrderedDate": "string",
  "appraisalDeliveryDate": "string",
  "taxTranscriptOrderedDate": "string",
  "taxTranscriptReceivedDate": "string",
  "titleOrderedDate": "string",
  "titleReceivedDate": "string",
  "hoiOrderedDate": "string",
  "hoiReceivedDate": "string",
  "preApprovalExpiryDate": "string",
  "tridDate": "string",
  "initialLESentDate": "string",
  "initialLESignedDate": "string",
  "mostRecentLESentDate": "string",
  "mostRecentLESignedDate": "string",
  "intentToProceedDate": "string",
  "initialCDSentDate": "string",
  "initialCDSignedDate": "string",
  "mostRecentCDSentDate": "string",
  "mostRecentCDSignedDate": "string",
  "appraisalContingency": "string",
  "loanContingency": "string",
  "closingContingency": "string",
  "estFirstPaymentDate": "string",
  "firstPaymentDate": "string",
  "dateToAvoidEPO": "string"
}

{

  "appraisalOrderedDate": "string",

  "appraisalDeliveryDate": "string",

  "taxTranscriptOrderedDate": "string",

  "taxTranscriptReceivedDate": "string",

  "titleOrderedDate": "string",

  "titleReceivedDate": "string",

  "hoiOrderedDate": "string",

  "hoiReceivedDate": "string",

  "preApprovalExpiryDate": "string",

  "tridDate": "string",

  "initialLESentDate": "string",

  "initialLESignedDate": "string",

  "mostRecentLESentDate": "string",

  "mostRecentLESignedDate": "string",

  "intentToProceedDate": "string",

  "initialCDSentDate": "string",

  "initialCDSignedDate": "string",

  "mostRecentCDSentDate": "string",

  "mostRecentCDSignedDate": "string",

  "appraisalContingency": "string",

  "loanContingency": "string",

  "closingContingency": "string",

  "estFirstPaymentDate": "string",

  "firstPaymentDate": "string",

  "dateToAvoidEPO": "string"

}

curl --request PATCH \
  --url https://gwapiconnect.myarive.com/api/loans/{id}/key-dates \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "appraisalOrderedDate": "string",
  "appraisalDeliveryDate": "string",
  "taxTranscriptOrderedDate": "string",
  "taxTranscriptReceivedDate": "string",
  "titleOrderedDate": "string",
  "titleReceivedDate": "string",
  "hoiOrderedDate": "string",
  "hoiReceivedDate": "string",
  "preApprovalExpiryDate": "string",
  "tridDate": "string",
  "initialLESentDate": "string",
  "initialLESignedDate": "string",
  "mostRecentLESentDate": "string",
  "mostRecentLESignedDate": "string",
  "intentToProceedDate": "string",
  "initialCDSentDate": "string",
  "initialCDSignedDate": "string",
  "mostRecentCDSentDate": "string",
  "mostRecentCDSignedDate": "string",
  "appraisalContingency": "string",
  "loanContingency": "string",
  "closingContingency": "string",
  "estFirstPaymentDate": "string",
  "firstPaymentDate": "string",
  "dateToAvoidEPO": "string"
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
