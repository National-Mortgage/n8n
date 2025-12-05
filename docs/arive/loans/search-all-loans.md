Search All Loans
get
https://gwapiconnect.myarive.com/api/loans

Get/Search Loans
Request
Query Parameters
limit
number

Number of records (Max 100)
Default:
10
offset
number

Skip Records
Default:
0
orderBy
string

Order by field
Allowed values:
createdAtupdatedAt
searchField
string

Search Field
Allowed values:
DISPLAY_IDSYSTEM_LOAN_GUIDLENDER_LOAN_IDBORROWER_NAMEBORROWER_PHONE_NUMBERBORROWER_EMAIL
searchValue
string

Search Value
sort
string

Sort Direction (Ascending or Descending)
Allowed values:
ASCDESC
Headers
X-API-KEY
string
required

ARIVE API Key
Responses
200
401

List of all loans in pipeline matching given filters
Body
responses
/
200
/
rows[]
.
loanPurpose
rows
array[object]
required

Get Loan List
ariveLoanId
number

ARIVE Display Loan Id
sysGUID
string

ARIVE System GUID
loanCreatedFrom
string

Loan Origination Source
financedFees
number

Financed Fees
loanBorrowers
array[object]

Borrower List
currentLoanStatus
object

Current Loan Status
modifiedDateTime
string<date-time>

Loan Updated At
createDateTime
string<date-time>

Loan Created At
subjectTBDIndicator
boolean

Subject Property TBD Indicator
loanOriginatorEmail
string

Loan Originator Email
loanProcessorEmail
string

Loan Processor Email
creditRepairIndicator
boolean

Credit Repair Indicator
archiveIndicator
boolean

Loan Archive Indicator
loanPurpose
string

Loan Purpose
Allowed values:
PurchaseRefinance
refinanceType
string

Refinance Type
Allowed values:
NoCashOutLimitedCashOutCashOut
cashoutPurpose
string

Cashout Purpose
Allowed values:
DebtConsolidationEducationHomeImprovementInterestRateReductionOther
mortgageType
string

Mortgage Type
Allowed values:
ConventionalVAFHAUSDARuralDevelopmentNonQMHELOCHELOANREVERSE
baseLoanAmount
number

Base Loan Amount
purchasePriceOrEstimatedValue
number

Property Value Or Purchase Price
subjectProperty
object

Property Details
deepLinkURL
string

Deep Link URL
crmReferenceId
string

CRM Reference Id
count
number
required

Total Count of Loans
Token
:
limit
:
offset
:
orderBy
:
searchField
:
searchValue
:
sort
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/loans \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '

{

  "rows": [

    {

      "ariveLoanId": 0,

      "sysGUID": "string",

      "loanCreatedFrom": "string",

      "financedFees": 0,

      "loanBorrowers": [

        {

          "firstName": "string",

          "lastName": "string",

          "emailAddressText": "string",

          "mobilePhone10digit": "string",

          "applicantType": "Borrower",

          "borrowerPairLoanAppSequence": 0,

          "posAppSubmissionDate": "string"

        }

      ],

      "currentLoanStatus": {

        "status": "string",

        "date": "1990-01-01",

        "adverseReason": null

      },

      "modifiedDateTime": "2019-08-24T14:15:22Z",

      "createDateTime": "2019-08-24T14:15:22Z",

      "subjectTBDIndicator": true,

      "loanOriginatorEmail": "string",

      "loanProcessorEmail": "string",

      "creditRepairIndicator": true,

      "archiveIndicator": true,

      "loanPurpose": "Purchase",

      "refinanceType": "NoCashOut",

      "cashoutPurpose": "DebtConsolidation",

      "mortgageType": "Conventional",

      "baseLoanAmount": 0,

      "purchasePriceOrEstimatedValue": 0,

      "subjectProperty": {

        "addressLineText": "string",

        "addressUnitIdentifier": "string",

        "city": "string",

        "county": "string",

        "postalCode": "string",

        "state": "string"

      },

      "deepLinkURL": "string",

      "crmReferenceId": "string"

    }

  ],

  "count": 0

}
