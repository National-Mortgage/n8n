Search all Leads
get
https://gwapiconnect.myarive.com/api/leads

List/Search of all leads in pipeline
Request
Query Parameters
leadSource
string

Lead Source
limit
number

Number of records (Max 100)
Default:
10
loanPurpose
string

Loan Purpose
Allowed values:
PurchaseRefinance
loanType
string

Loan Type
Allowed values:
ConventionalVAFHAUSDARuralDevelopmentNonQMHELOCHELOAN
offset
number

Skip Records
Default:
0
orderBy
string

Order by field
Allowed values:
createdAtupdatedAtloanAmountleadStatus
sort
string

Sort Direction (Ascending or Descending)
Allowed values:
ASCDESC
status
string

Status
Allowed values:
NEWCONTACTEDQUALIFIEDLOST
Headers
X-API-KEY
string
required

ARIVE API Key
Responses
200
401

List of all leads in pipeline matching given filters
Body
responses
/
200
/
[]
.
borrower
.
emailAddressText
array of:
ariveLeadId
number
required

ARIVE Display Lead Id
sysGUID
string
required

ARIVE System GUID
leadSource
string

Lead Source
Allowed values:
AdvertisementNewspaperRadioRealEstateAgentFinancialAdvisorFriendFamilyReturnClientSearchEngineSocialMediaTelevisionOther
assigneeEmail
string
required

Email of Primary Lead Owner
loanPurpose
string
required

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
ConventionalVAFHAUSDARuralDevelopmentNonQMHELOCHELOAN
baseLoanAmount
number

Base Loan Amount
lienPosition
string

Lien Position
purchasePriceOrEstimatedValue
number

Property Value / Sales Price
propertyType
string

Property Type
Allowed values:
SingleFamilyCondominiumCooperativeManufacturedHomePUDTownHouseVACANT_LOT_LAND
financedUnitCount
number

Number of Units
attachmentType
string

Attachment Type
Allowed values:
DetachedAttached
propertyUsageType
string

Property Usage (Primary, Second Home etc.)
Allowed values:
PrimaryResidenceInvestmentSecondHome
leadStatus
string

Lead Status
Allowed values:
NEWCONTACTEDQUALIFIEDLOST
subjectTBDIndicator
boolean

Subject Property TBD Indicator
Default:
false
subjectProperty
object

Subject Property Address
lineText
string

Subject Property Street Address
city
string

Subject Property City
county
string

Subject Property County
postalCode
string

Subject Property Postal Code
state
string

Subject Property State
unitId
string

Unit/Apt
borrower
object
required

Borrower
firstName
string
required

Borrower First Name
lastName
string
required

Borrower Last Name
emailAddressText
string
required

Borrower Email
mobilePhone10digit
string

Borrower Cell Phone#
homePhone10digit
string

Borrower Home Phone#
emailOptOut
boolean

Email Opt Out
smsOptOut
boolean

SMS Opt Out
noContactRequest
string

No Contact Request
firstTimeHomeBuyer
boolean

Is Borrower a First time Homebuyer
coBorrower
object

Co-Borrower
firstName
string

Co-Borrower First Name
lastName
string

Co-Borrower Last Name
emailAddressText
string

Co-Borrower Email
CellPhone
string

Co-Borrower Cell Phone#
crmReferenceId
string

CRM Reference Id
deepLinkURL
string

Deep Link URL
Token
:
leadSource
:
limit
:
loanPurpose
:
loanType
:
offset
:
orderBy
:
sort
:
status
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/leads \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '

[

  {

    "ariveLeadId": 0,

    "sysGUID": "string",

    "leadSource": "Advertisement",

    "assigneeEmail": "string",

    "loanPurpose": "Purchase",

    "refinanceType": "NoCashOut",

    "cashoutPurpose": "DebtConsolidation",

    "mortgageType": "Conventional",

    "baseLoanAmount": 0,

    "lienPosition": "string",

    "purchasePriceOrEstimatedValue": 0,

    "propertyType": "SingleFamily",

    "financedUnitCount": 0,

    "attachmentType": "Detached",

    "propertyUsageType": "PrimaryResidence",

    "leadStatus": "NEW",

    "subjectTBDIndicator": false,

    "subjectProperty": {

      "lineText": "string",

      "city": "string",

      "county": "string",

      "postalCode": "string",

      "state": "string",

      "unitId": "string"

    },

    "borrower": {

      "firstName": "string",

      "lastName": "string",

      "emailAddressText": "string",

      "mobilePhone10digit": "string",

      "homePhone10digit": "string",

      "emailOptOut": true,

      "smsOptOut": true,

      "noContactRequest": "string",

      "firstTimeHomeBuyer": true

    },

    "coBorrower": {

      "firstName": "string",

      "lastName": "string",

      "emailAddressText": "string",

      "CellPhone": "string"

    },

    "crmReferenceId": "string",

    "deepLinkURL": "string"

  }

]
