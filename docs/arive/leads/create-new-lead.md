Create new Lead
post
https://gwapiconnect.myarive.com/api/leads

Create Leads in ARIVE
Request
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
coBorrower
.
militaryServiceType
leadSource
string

Lead Source
otherSourceDesc
string

Other Source Description
homebuyingStage
string

Home Buying Stage
Allowed values:
GETTING_STARTEDMAKING_OFFERSFOUND_A_HOUSE_OR_OFFER_PENDINGUNDER_CONTRACT
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
purchasePriceOrEstimatedValue
number

Property Value / Sales Price
estimatedHOIMonthly
string

Estimated Monthly HOI Amount
estimatedPropertyTaxesMonthly
string

Estimated Monthly Property Taxes
estimatedAssociationDuesMonthly
string

Estimated Monthly HOA Dues
estimatedFICO
string

Estimated Loan FICO
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
lienPosition
string

LienPosition
Allowed values:
FirstLienSecondLien
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
Allowed values:
None WaivedAll WaivedHazard Insurance WaivedProperty Taxes Waived
currentInterestRateRefi
number

Current Interest Rate Refinance
propertyType
string

Property Type
Allowed values:
SINGLE_FAMILY_DETACHEDSINGLE_FAMILY_ATTACHEDTWO_UNITTHREE_UNITFOUR_UNITMANUFACTURED_SINGLE_WIDEMANUFACTURED_DOUBLE_WIDECOOP_UNDER_5_STORIESCOOP_5_8_STORIESCOOP_OVER_8_STORIESTOWNHOUSEMIXED_USE_PROPERTYDETACHED_CONDOSITE_CONDOCONDO_UNDER_5_STORIESCONDO_5_8_STORIESCONDO_OVER_8_STORIESCONDOTELPUDVACANT_LOT_LAND
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
leadLostReason
string

Lead Status Lost Reason
Allowed values:
Poor_CreditFound_Better_RateFound_Lower_FeesForeclosure_BankruptcyDecided_to_WaitIncome_too_LowSelf_Employed_1yrUnresponsiveNot_Licensed_in_StateHouse_fell_throughOtherFake_EmailFake_Number_EmailFake_Phone_NumberNot_Interested
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
birthDate
string

Borrower Birth Date
emailAddressText
string
required

Borrower Email
mobilePhone10digit
string

Borrower Cell Phone#
ssn
string

Social Securtiy Number
militaryServiceType
string

Borrower Military Service Type
Allowed values:
ActiveDutyVeteranReserveNationalGuardNeverActivated
currentResidence
object

Borrower Current Residence
employmentType
string

Employment Status
Allowed values:
employedactive military dutyself-employedunemployedretiredother
hasRealEstate
boolean

Has Real Estate
annualIncome
number

Borrower Gross Annual Income
totalLiability
number

Borrower Total Monthly Liability
firstTimeHomeBuyer
boolean

Is Borrower a First time Homebuyer
yearsSinceForeclosure
string

Years Since Foreclosure
yearsSinceBankruptcy
string

Years Since Bankruptcy
currentlyOwningAHome
boolean

Currently Owning a Home
planningToSellItBeforeBuying
boolean

Planning To Sell Currently Owned Home Before Buying
noContactRequest
boolean

No Contact Request
emailOptOut
boolean

Email Opt Out
smsOptOut
boolean

Sms Opt Out
occupancy
string

Occupancy
Allowed values:
OwnRentLivingRentFree
monthlyRentAmt
string

Monthly Rent Amount
hasCoBorrower
boolean

Has Co-Borrower
durationMonthsCount
string

Address Duration In Months
durationYearsCount
string

Address Duration In Years
coBorrower
object

Co-Borrower
firstName
string
required

Co-Borrower First Name
lastName
string
required

Co-Borrower Last Name
birthDate
string

Co-Borrower Birth Date
emailAddressText
string
required

Co-Borrower Email
cellPhone
string

Co-Borrower Cell Phone#
ssn
string

Co-Borrower Social Securtiy Number
militaryServiceType
string

Co-Borrower Military Service Type
Allowed values:
ActiveDutyVeteranReserveNationalGuardNeverActivated
crmReferenceId
string

CRM Reference Id
leadProvidedBy
string

Lead Provided By
Responses
201
400
401

The record has been successfully created.
Body
ariveLeadId
number

ARIVE Display Lead Id
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
sync
:
X-API-KEY*
:
{
  "leadSource": "string",
  "otherSourceDesc": "string",
  "homebuyingStage": "GETTING_STARTED",
  "assigneeEmail": "string",
  "loanPurpose": "Purchase",
  "refinanceType": "NoCashOut",
  "cashoutPurpose": "DebtConsolidation",
  "mortgageType": "Conventional",
  "baseLoanAmount": 0,
  "purchasePriceOrEstimatedValue": 0,
  "estimatedHOIMonthly": "string",
  "estimatedPropertyTaxesMonthly": "string",
  "estimatedAssociationDuesMonthly": "string",
  "estimatedFICO": "string",
  "amortizationType": "AdjustableRate",
  "noteRate": 0,
  "qualifyingRate": 0,
  "term": 0,
  "interestOnly": true,
  "InterestOnlyTerm": 0,
  "lienPosition": "FirstLien",
  "InitialFixedPeriodEffectiveMonthsCount": 0,
  "NormalRateAdjustmentPeriod": 0,
  "desiredMonthlyPayment": 0,
  "impoundWaiver": "None Waived",
  "currentInterestRateRefi": 0,
  "propertyType": "SINGLE_FAMILY_DETACHED",
  "propertyUsageType": "PrimaryResidence",
  "leadStatus": "NEW",
  "leadLostReason": "Poor_Credit",
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
    "birthDate": "string",
    "emailAddressText": "string",
    "mobilePhone10digit": "string",
    "ssn": "string",
    "militaryServiceType": "ActiveDuty",
    "currentResidence": {
      "addressCountry": "string",
      "addressCity": "string",
      "addressPostalCode": "string",
      "addressState": "string",
      "addressUnitIdentifier": "string",
      "addressLineText": "string"
    },
    "employmentType": "employed",
    "hasRealEstate": true,
    "annualIncome": 0,
    "totalLiability": 0,
    "firstTimeHomeBuyer": true,
    "yearsSinceForeclosure": "string",
    "yearsSinceBankruptcy": "string",
    "currentlyOwningAHome": true,
    "planningToSellItBeforeBuying": true,
    "noContactRequest": true,
    "emailOptOut": true,
    "smsOptOut": true,
    "occupancy": "Own",
    "monthlyRentAmt": "string",
    "hasCoBorrower": true,
    "durationMonthsCount": "string",
    "durationYearsCount": "string"
  },
  "coBorrower": {
    "firstName": "string",
    "lastName": "string",
    "birthDate": "string",
    "emailAddressText": "string",
    "cellPhone": "string",
    "ssn": "string",
    "militaryServiceType": "ActiveDuty"
  },
  "crmReferenceId": "string",
  "leadProvidedBy": "string"
}

{

  "leadSource": "string",

  "otherSourceDesc": "string",

  "homebuyingStage": "GETTING_STARTED",

  "assigneeEmail": "string",

  "loanPurpose": "Purchase",

  "refinanceType": "NoCashOut",

  "cashoutPurpose": "DebtConsolidation",

  "mortgageType": "Conventional",

  "baseLoanAmount": 0,

  "purchasePriceOrEstimatedValue": 0,

  "estimatedHOIMonthly": "string",

  "estimatedPropertyTaxesMonthly": "string",

  "estimatedAssociationDuesMonthly": "string",

  "estimatedFICO": "string",

  "amortizationType": "AdjustableRate",

  "noteRate": 0,

  "qualifyingRate": 0,

  "term": 0,

  "interestOnly": true,

  "InterestOnlyTerm": 0,

  "lienPosition": "FirstLien",

  "InitialFixedPeriodEffectiveMonthsCount": 0,

  "NormalRateAdjustmentPeriod": 0,

  "desiredMonthlyPayment": 0,

  "impoundWaiver": "None Waived",

  "currentInterestRateRefi": 0,

  "propertyType": "SINGLE_FAMILY_DETACHED",

  "propertyUsageType": "PrimaryResidence",

  "leadStatus": "NEW",

  "leadLostReason": "Poor_Credit",

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

    "birthDate": "string",

    "emailAddressText": "string",

    "mobilePhone10digit": "string",

    "ssn": "string",

    "militaryServiceType": "ActiveDuty",

    "currentResidence": {

      "addressCountry": "string",

      "addressCity": "string",

      "addressPostalCode": "string",

      "addressState": "string",

      "addressUnitIdentifier": "string",

      "addressLineText": "string"

    },

    "employmentType": "employed",

    "hasRealEstate": true,

    "annualIncome": 0,

    "totalLiability": 0,

    "firstTimeHomeBuyer": true,

    "yearsSinceForeclosure": "string",

    "yearsSinceBankruptcy": "string",

    "currentlyOwningAHome": true,

    "planningToSellItBeforeBuying": true,

    "noContactRequest": true,

    "emailOptOut": true,

    "smsOptOut": true,

    "occupancy": "Own",

    "monthlyRentAmt": "string",

    "hasCoBorrower": true,

    "durationMonthsCount": "string",

    "durationYearsCount": "string"

  },

  "coBorrower": {

    "firstName": "string",

    "lastName": "string",

    "birthDate": "string",

    "emailAddressText": "string",

    "cellPhone": "string",

    "ssn": "string",

    "militaryServiceType": "ActiveDuty"

  },

  "crmReferenceId": "string",

  "leadProvidedBy": "string"

}

curl --request POST \
  --url https://gwapiconnect.myarive.com/api/leads \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "leadSource": "string",
  "otherSourceDesc": "string",
  "homebuyingStage": "GETTING_STARTED",
  "assigneeEmail": "string",
  "loanPurpose": "Purchase",
  "refinanceType": "NoCashOut",
  "cashoutPurpose": "DebtConsolidation",
  "mortgageType": "Conventional",
  "baseLoanAmount": 0,
  "purchasePriceOrEstimatedValue": 0,
  "estimatedHOIMonthly": "string",
  "estimatedPropertyTaxesMonthly": "string",
  "estimatedAssociationDuesMonthly": "string",
  "estimatedFICO": "string",
  "amortizationType": "AdjustableRate",
  "noteRate": 0,
  "qualifyingRate": 0,
  "term": 0,
  "interestOnly": true,
  "InterestOnlyTerm": 0,
  "lienPosition": "FirstLien",
  "InitialFixedPeriodEffectiveMonthsCount": 0,
  "NormalRateAdjustmentPeriod": 0,
  "desiredMonthlyPayment": 0,
  "impoundWaiver": "None Waived",
  "currentInterestRateRefi": 0,
  "propertyType": "SINGLE_FAMILY_DETACHED",
  "propertyUsageType": "PrimaryResidence",
  "leadStatus": "NEW",
  "leadLostReason": "Poor_Credit",
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
    "birthDate": "string",
    "emailAddressText": "string",
    "mobilePhone10digit": "string",
    "ssn": "string",
    "militaryServiceType": "ActiveDuty",
    "currentResidence": {
      "addressCountry": "string",
      "addressCity": "string",
      "addressPostalCode": "string",
      "addressState": "string",
      "addressUnitIdentifier": "string",
      "addressLineText": "string"
    },
    "employmentType": "employed",
    "hasRealEstate": true,
    "annualIncome": 0,
    "totalLiability": 0,
    "firstTimeHomeBuyer": true,
    "yearsSinceForeclosure": "string",
    "yearsSinceBankruptcy": "string",
    "currentlyOwningAHome": true,
    "planningToSellItBeforeBuying": true,
    "noContactRequest": true,
    "emailOptOut": true,
    "smsOptOut": true,
    "occupancy": "Own",
    "monthlyRentAmt": "string",
    "hasCoBorrower": true,
    "durationMonthsCount": "string",
    "durationYearsCount": "string"
  },
  "coBorrower": {
    "firstName": "string",
    "lastName": "string",
    "birthDate": "string",
    "emailAddressText": "string",
    "cellPhone": "string",
    "ssn": "string",
    "militaryServiceType": "ActiveDuty"
  },
  "crmReferenceId": "string",
  "leadProvidedBy": "string"
}'

{

  "ariveLeadId": 0,

  "code": "string",

  "status": 0,

  "message": "string",

  "sysGUID": "string",

  "deepLinkURL": "string",

  "createDateTime": "string",

  "assigneeEmail": "string",

  "crmReferenceId": "string"

}
