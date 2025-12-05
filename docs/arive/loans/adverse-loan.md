Adverse Loan
patch
https://gwapiconnect.myarive.com/api/loans/{id}/adverse

Adverse Loan
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
denialReasons[]
adverseDate
string
required

Adverse Date
reason
string
required

Adverse Reason
Allowed values:
APP_DENIED_BY_LENDING_INSTITUTIONAPP_APPROVED_BUT_NOT_ACCEPTEDAPP_WITHDRAWN_BY_BORROWERFILE_CLOSED_FOR_INCOMPLETENESSPREAPPROVAL_APPROVED_BUT_NOT_ACCEPTEDPREAPPROVAL_DENIEDAPP_RESCINDED_BY_BORROWER
denialReasons
array[string]

Denial Reasons
Allowed values:
NO_CREDIT_FILEINSUFFICIENT_NUMBER_OF_CREDIT_REFERENCES_PROVIDEDUNACCEPTABLE_TYPE_OF_CREDIT_REFERENCES_PROVIDEDLIMITED_CREDIT_EXPERIENCEPOOR_CREDIT_PERFORMANCE_WITH_USUNABLE_TO_VERIFY_CREDIT_REFERENCESGARNISHMENT_OR_ATTACHMENTFORECLOSURE_OR_REPOSSESSIONEXCESSIVE_OBLIGATIONSEXCESSIVE_OBLIGATIONS_IN_RELATION_TO_INCOMEUNACCEPTABLE_PAYMENT_RECORD_ON_PREVIOUS_MORTGAGELACK_OF_CASH_RESERVESDELINQUENT_PAST_OR_PRESENT_CREDIT_OBLIGATIONS_WITH_OTHERSBANKRUPTCYCOLLECTION_ACTION_OR_JUDGMENTNUMBER_OF_RECENT_INQUIRIES_ON_CREDIT_BUREAU_REPORTCREDIT_OTHERUNABLE_TO_VERIFY_EMPLOYMENTLENGTH_OF_EMPLOYMENTTEMPORARY_OR_IRREGULAR_EMPLOYMENTEMPLOYMENT_STATUS_OTHERINCOME_INSUFFICIENT_FOR_AMOUNT_OF_CREDIT_REQUESTEDUNABLE_TO_VERIFY_INCOMEINCOME_OTHERTEMPORARY_RESIDENCELENGTH_OF_RESIDENCEUNABLE_TO_VERIFY_RESIDENCERESIDENCE_OTHERDEPARTMENT_OF_HOUSING_AND_URBAN_DEVELOPMENTDEPARTMENT_OF_VETERANS_AFFAIRSFEDERAL_NATIONAL_MORTGAGE_ASSOCIATIONFEDERAL_HOME_LOAN_MORTGAGE_ASSOCIATIONINSUFFICIENT_FUNDS_TO_CLOSE_THE_LOANCREDIT_APPLICATION_INCOMPLETEINADEQUATE_COLLATERALUNACCEPTABLE_PROPERTYVALUE_OR_TYPE_OF_COLLATERAL_NOT_SUFFICIENTPROPERTYUNACCEPTABLE_APPRAISALUNACCEPTABLE_LEASEHOLD_ESTATEDO_NOT_GRANT_CREDITWITHDRAWN_BY_APPLICANTOTHERMORTGAGE_INSURANCE_DENIED
withdrawnReason
string

Withdrawn Reason
Allowed values:
COMPETITOR_OFFERED_LOWER_RATE_OR_BETTER_TERMSHOME_FOR_SALENO_REASON_PROVIDEDOTHERPURCHASED_AGREEMENT_CANCELEDSERVICE_UNSATISFACTORYUNEXPECTED_LIFE_EVENT
decisionBasedOnCredit
boolean

Decision Based On Credit Report
decisionBasedOnOutsideSource
boolean

Decision Based On Outside Source
decisionBasedOnOtherDesc
string

Decision Based On Other Description
deliveryType
string

Delivery Type
Allowed values:
MailedHandDeliveredEmail
deliveryDate
string

Delivery Date
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
  "adverseDate": "string",
  "reason": "APP_DENIED_BY_LENDING_INSTITUTION",
  "denialReasons": [
    "NO_CREDIT_FILE"
  ],
  "withdrawnReason": "COMPETITOR_OFFERED_LOWER_RATE_OR_BETTER_TERMS",
  "decisionBasedOnCredit": true,
  "decisionBasedOnOutsideSource": true,
  "decisionBasedOnOtherDesc": "string",
  "deliveryType": "Mailed",
  "deliveryDate": "string"
}

{

  "adverseDate": "string",

  "reason": "APP_DENIED_BY_LENDING_INSTITUTION",

  "denialReasons": [

    "NO_CREDIT_FILE"

  ],

  "withdrawnReason": "COMPETITOR_OFFERED_LOWER_RATE_OR_BETTER_TERMS",

  "decisionBasedOnCredit": true,

  "decisionBasedOnOutsideSource": true,

  "decisionBasedOnOtherDesc": "string",

  "deliveryType": "Mailed",

  "deliveryDate": "string"

}

curl --request PATCH \
  --url https://gwapiconnect.myarive.com/api/loans/{id}/adverse \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "adverseDate": "string",
  "reason": "APP_DENIED_BY_LENDING_INSTITUTION",
  "denialReasons": [
    "NO_CREDIT_FILE"
  ],
  "withdrawnReason": "COMPETITOR_OFFERED_LOWER_RATE_OR_BETTER_TERMS",
  "decisionBasedOnCredit": true,
  "decisionBasedOnOutsideSource": true,
  "decisionBasedOnOtherDesc": "string",
  "deliveryType": "Mailed",
  "deliveryDate": "string"
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
