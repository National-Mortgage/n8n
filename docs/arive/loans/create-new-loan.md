Create New Loan
post
https://gwapiconnect.myarive.com/api/loans

Create a new Loan in ARIVE. The loan will be created in Prospect pipeline with App Intake Stage. Once created only Loan Status can be updated via APIs
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
purchasePriceOrEstimatedValue
externalCreateDate
string

Application Creation Date
leadSource
string

Lead Source
homebuyingStage
string

Home Buying Stage
Allowed values:
GETTING_STARTEDMAKING_OFFERSFOUND_A_HOUSE_OR_OFFER_PENDINGUNDER_CONTRACT
originatorEmail
string
required

Email of Primary Loan Officer
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
ConventionalVAFHAUSDANon-QMHELOCHELOANREVERSE
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
subjectTBDIndicator
boolean

Is Subject Property TBD?
subjectProperty
object

Subject Property Address
addressLineText
string

Subject Property Street Address
addressUnitIdentifier
string

Subject Property Unit
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
loanBorrowers
array[object]
required

List of Borrowers
applicantType
string
required

Applicant Type (Borrower | CoBorrower)
Allowed values:
BorrowerCoBorrower
borrowerPairLoanAppSequence
number
required

1003 Number, Single 1003 can only have 2 borrowers
firstName
string
required

Borrower First Name
middleName
string

Borrower Middle Name
lastName
string
required

Borrower Last Name
suffix
string

Borrower Name Suffix
nickName
string

Borrower Nick Name
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
homePhone10digit
string

Borrower Home Phone#
currentEmployment
string

Employment type
Allowed values:
EmployedNot EmployedSelf Employed
totalMonthlyIncome
number

Borrower Total Monthly Income
militaryServiceType
string

Borrower Military Service Type
Allowed values:
ActiveDutyVeteranReserveNationalGuardNeverActivated
maritalStatusType
string

Borrower Marital Status Type
Allowed values:
MarriedUnmarriedSeparated
residencyType
string

Borrower Residency Type
Allowed values:
USCitizenPermanentResidentAlienNonPermanentResidentAlien
currentResidence
object

Borrower Current Residence
mailingAddressSeparateFromResidence
boolean

Borrower Mailing Address Is Separate From Residence
mailingAddress
object

Borrower Mailing Address
dependentCount
number

Number of Dependents
dependentsAgesDesc
string

Comma Separated ages of all dependents
firstTimeHomeBuyer
boolean

Is Borrower a First time Homebuyer
languagePreference
string

Borrower Language Preference
defaultPast7years
string

Any Default in last 7 Years
Allowed values:
NOBANKRUPTCYFORECLOSUREBOTH
crmReferenceId
string

CRM Reference Id
Responses
201
400
401

The record has been successfully created.
Body
responses
/
201
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
sync
:
X-API-KEY*
:
{
  "externalCreateDate": "string",
  "leadSource": "string",
  "homebuyingStage": "GETTING_STARTED",
  "originatorEmail": "string",
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
  "currentInterestRateRefi": 0,
  "propertyType": "SINGLE_FAMILY_DETACHED",
  "propertyUsageType": "PrimaryResidence",
  "subjectTBDIndicator": true,
  "subjectProperty": {
    "addressLineText": "string",
    "addressUnitIdentifier": "string",
    "city": "string",
    "county": "string",
    "postalCode": "string",
    "state": "string"
  },
  "loanBorrowers": [
    {
      "applicantType": "Borrower",
      "borrowerPairLoanAppSequence": 0,
      "firstName": "string",
      "middleName": "string",
      "lastName": "string",
      "suffix": "string",
      "nickName": "string",
      "birthDate": "string",
      "emailAddressText": "string",
      "mobilePhone10digit": "string",
      "homePhone10digit": "string",
      "currentEmployment": "Employed",
      "totalMonthlyIncome": 0,
      "militaryServiceType": "ActiveDuty",
      "maritalStatusType": "Married",
      "residencyType": "USCitizen",
      "currentResidence": {
        "addressLineText": "string",
        "addressUnitIdentifier": "string",
        "addressCity": "string",
        "addressState": "string",
        "addressPostalCode": "string",
        "addressCountry": "string",
        "durationTermMonths": 0,
        "residencyBasisType": "Own"
      },
      "mailingAddressSeparateFromResidence": true,
      "mailingAddress": {
        "addressLineText": "string",
        "addressUnitIdentifier": "string",
        "addressCity": "string",
        "addressState": "string",
        "addressPostalCode": "string",
        "addressCountry": "string",
        "addressCounty": "string"
      },
      "dependentCount": 0,
      "dependentsAgesDesc": "string",
      "firstTimeHomeBuyer": true,
      "languagePreference": "string",
      "defaultPast7years": "NO"
    }
  ],
  "crmReferenceId": "string"
}

{

  "externalCreateDate": "string",

  "leadSource": "string",

  "homebuyingStage": "GETTING_STARTED",

  "originatorEmail": "string",

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

  "currentInterestRateRefi": 0,

  "propertyType": "SINGLE_FAMILY_DETACHED",

  "propertyUsageType": "PrimaryResidence",

  "subjectTBDIndicator": true,

  "subjectProperty": {

    "addressLineText": "string",

    "addressUnitIdentifier": "string",

    "city": "string",

    "county": "string",

    "postalCode": "string",

    "state": "string"

  },

  "loanBorrowers": [

    {

      "applicantType": "Borrower",

      "borrowerPairLoanAppSequence": 0,

      "firstName": "string",

      "middleName": "string",

      "lastName": "string",

      "suffix": "string",

      "nickName": "string",

      "birthDate": "string",

      "emailAddressText": "string",

      "mobilePhone10digit": "string",

      "homePhone10digit": "string",

      "currentEmployment": "Employed",

      "totalMonthlyIncome": 0,

      "militaryServiceType": "ActiveDuty",

      "maritalStatusType": "Married",

      "residencyType": "USCitizen",

      "currentResidence": {

        "addressLineText": "string",

        "addressUnitIdentifier": "string",

        "addressCity": "string",

        "addressState": "string",

        "addressPostalCode": "string",

        "addressCountry": "string",

        "durationTermMonths": 0,

        "residencyBasisType": "Own"

      },

      "mailingAddressSeparateFromResidence": true,

      "mailingAddress": {

        "addressLineText": "string",

        "addressUnitIdentifier": "string",

        "addressCity": "string",

        "addressState": "string",

        "addressPostalCode": "string",

        "addressCountry": "string",

        "addressCounty": "string"

      },

      "dependentCount": 0,

      "dependentsAgesDesc": "string",

      "firstTimeHomeBuyer": true,

      "languagePreference": "string",

      "defaultPast7years": "NO"

    }

  ],

  "crmReferenceId": "string"

}

curl --request POST \
  --url https://gwapiconnect.myarive.com/api/loans \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'Content-Type: application/json' \
  --header 'X-API-KEY: ' \
  --data '{
  "externalCreateDate": "string",
  "leadSource": "string",
  "homebuyingStage": "GETTING_STARTED",
  "originatorEmail": "string",
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
  "currentInterestRateRefi": 0,
  "propertyType": "SINGLE_FAMILY_DETACHED",
  "propertyUsageType": "PrimaryResidence",
  "subjectTBDIndicator": true,
  "subjectProperty": {
    "addressLineText": "string",
    "addressUnitIdentifier": "string",
    "city": "string",
    "county": "string",
    "postalCode": "string",
    "state": "string"
  },
  "loanBorrowers": [
    {
      "applicantType": "Borrower",
      "borrowerPairLoanAppSequence": 0,
      "firstName": "string",
      "middleName": "string",
      "lastName": "string",
      "suffix": "string",
      "nickName": "string",
      "birthDate": "string",
      "emailAddressText": "string",
      "mobilePhone10digit": "string",
      "homePhone10digit": "string",
      "currentEmployment": "Employed",
      "totalMonthlyIncome": 0,
      "militaryServiceType": "ActiveDuty",
      "maritalStatusType": "Married",
      "residencyType": "USCitizen",
      "currentResidence": {
        "addressLineText": "string",
        "addressUnitIdentifier": "string",
        "addressCity": "string",
        "addressState": "string",
        "addressPostalCode": "string",
        "addressCountry": "string",
        "durationTermMonths": 0,
        "residencyBasisType": "Own"
      },
      "mailingAddressSeparateFromResidence": true,
      "mailingAddress": {
        "addressLineText": "string",
        "addressUnitIdentifier": "string",
        "addressCity": "string",
        "addressState": "string",
        "addressPostalCode": "string",
        "addressCountry": "string",
        "addressCounty": "string"
      },
      "dependentCount": 0,
      "dependentsAgesDesc": "string",
      "firstTimeHomeBuyer": true,
      "languagePreference": "string",
      "defaultPast7years": "NO"
    }
  ],
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
