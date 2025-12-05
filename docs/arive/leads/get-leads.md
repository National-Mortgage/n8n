Get Lead
get
https://gwapiconnect.myarive.com/api/leads/{id}

Get single Lead by Id
Request
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
401
404

Lead Object
Body
responses
/
200
/
amortizationType
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
monthOfBirth
string

Borrower Month Of Birth
dayOfBirth
string

Borrower Day Of Birth
currentResidence
object

Borrower Current Residence
employmentType
string

Employment Status
hasCoBorrower
boolean

Has Co Borrower?
hasRealEstate
boolean

Has Real Estate
annualIncome
number

Borrower Annual Income
totalMonthlyIncome
number

Borrower Monthly Income
militaryServiceType
string

Borrower Military Service Type
Allowed values:
ActiveDutyVeteranReserveNationalGuardNeverActivated
yearsSinceForeclosure
string

Years Since Foreclosure
yearsSinceBankruptcy
string

Years Since Bankruptcy
currentlyOwningAHome
boolean

Currently Owning A Home
planningToSellItBeforeBuying
boolean

Planning To Sell Currently Owned Home Before Buying
totalLiability
number

Borrower Total Monthly Liability
durationMonthsCount
string

Address Duration In Months
occupancy
string

Occupancy
Allowed values:
OwnRentLivingRentFree
birthDate
string

Borrower Birth Date
Example:
1990-01-01
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
militaryServiceType
string

Co-Borrower Military Service Type
monthOfBirth
string

Co-Borrower Month Of Birth
dayOfBirth
string

Co-Borrower Day Of Birth
birthDate
string

Co-Borrower Birth Date
Example:
1990-01-01
crmReferenceId
string

CRM Reference Id
deepLinkURL
string

Deep Link URL
estimatedHOIMonthly
string

Estimated HOI Amount
estimatedPropertyTaxesMonthly
string

Estimated Property Taxes
estimatedAssociationDuesMonthly
string

Estimated HOA Dues
mIPremiumMonthlyAmt
string

Estimated MI Premium
floodInsuranceMonthlyAmt
string

Flood Insurance Monthly Amount
estimatedFICO
string

Estimated Loan FICO
otherSourceDesc
string

Other Lead Source Description
amortizationType
string

Amortization Type
Allowed values:
AdjustableRateFixed
noteRate
number

Note Rate
qualifyingRate
number

Qualifying Rate
term
number

Amortization Term In Months
interestOnly
boolean

Interest Only
InterestOnlyTerm
number

Interest Only Term In Months
InitialFixedPeriodEffectiveMonthsCount
number

Initial Adjustment Period In Months
NormalRateAdjustmentPeriod
number

Subsequent Adjustment Period In Months
desiredMonthlyPayment
number

Desired Monthly Payment
impoundWaiver
string

Impound Waiver
leadProvidedBy
string

Lead Provided By
homebuyingStage
string

Home Buying Stage
Allowed values:
GETTING_STARTEDMAKING_OFFERSFOUND_A_HOUSE_OR_OFFER_PENDINGUNDER_CONTRACT
currentInterestRateRefi
number

Current Interest Rate Refinance
Token
:
id*
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/leads/{id} \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '

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

    "firstTimeHomeBuyer": true,

    "monthOfBirth": "string",

    "dayOfBirth": "string",

    "currentResidence": {

      "addressCountry": "string",

      "addressCity": "string",

      "addressPostalCode": "string",

      "addressState": "string",

      "addressUnitIdentifier": "string",

      "addressLineText": "string"

    },

    "employmentType": "string",

    "hasCoBorrower": true,

    "hasRealEstate": true,

    "annualIncome": 0,

    "totalMonthlyIncome": 0,

    "militaryServiceType": "ActiveDuty",

    "yearsSinceForeclosure": "string",

    "yearsSinceBankruptcy": "string",

    "currentlyOwningAHome": true,

    "planningToSellItBeforeBuying": true,

    "totalLiability": 0,

    "durationMonthsCount": "string",

    "occupancy": "Own",

    "birthDate": "1990-01-01"

  },

  "coBorrower": {

    "firstName": "string",

    "lastName": "string",

    "emailAddressText": "string",

    "CellPhone": "string",

    "militaryServiceType": "string",

    "monthOfBirth": "string",

    "dayOfBirth": "string",

    "birthDate": "1990-01-01"

  },

  "crmReferenceId": "string",

  "deepLinkURL": "string",

  "estimatedHOIMonthly": "string",

  "estimatedPropertyTaxesMonthly": "string",

  "estimatedAssociationDuesMonthly": "string",

  "mIPremiumMonthlyAmt": "string",

  "floodInsuranceMonthlyAmt": "string",

  "estimatedFICO": "string",

  "otherSourceDesc": "string",

  "amortizationType": "AdjustableRate",

  "noteRate": 0,

  "qualifyingRate": 0,

  "term": 0,

  "interestOnly": true,

  "InterestOnlyTerm": 0,

  "InitialFixedPeriodEffectiveMonthsCount": 0,

  "NormalRateAdjustmentPeriod": 0,

  "desiredMonthlyPayment": 0,

  "impoundWaiver": "string",

  "leadProvidedBy": "string",

  "homebuyingStage": "GETTING_STARTED",

  "currentInterestRateRefi": 0

}
