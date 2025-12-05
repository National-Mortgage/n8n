Get Loan Details
get
https://gwapiconnect.myarive.com/api/loans/{id}

Get Loans by Id with additional data
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

Loan Object
Body
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
currentLoanStatus
object

Current Loan Status
status
string

Status Name
date
string

Status Date
Example:
1990-01-01
adverseReason
string

Adverse Reason
Allowed values:
APP_DENIED_BY_LENDING_INSTITUTIONAPP_APPROVED_BUT_NOT_ACCEPTEDAPP_WITHDRAWN_BY_BORROWERFILE_CLOSED_FOR_INCOMPLETENESSPREAPPROVAL_APPROVED_BUT_NOT_ACCEPTEDPREAPPROVAL_DENIEDAPP_RESCINDED_BY_BORROWER
Default:
null
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
deepLinkURL
string

Deep Link URL
crmReferenceId
string

CRM Reference Id
loanBorrowers
array[object]

Borrower List
firstName
string

First Name
lastName
string

Last Name
nickName
string

Nick Name
emailAddressText
string

Email
mobilePhone10digit
string

Phone
workPhone
string

Work Phone
homePhone
string

Home Phone
applicantType
string

Applicant Type
Allowed values:
BorrowerCoBorrower
borrowerPairLoanAppSequence
number

Borrower Pair Loan App Sequence Number
monthOfBirth
string

Borrower Month Of Birth
dayOfBirth
string

Borrower Day Of Birth
maritalStatusType
string

Borrower Marital Status
posAppSubmissionDate
string

POS Application Submission Date
currentResidence
object

Current Residence
preferedLanguages
string

Prefered Languages
firstTimeHomeBuyer
boolean

First Time Home Buyer Indicator
birthDate
string

Borrower Birth Date
Example:
1990-01-01
borrowerIncome
object

Borrower Total Monthly Income
leadSource
string

Lead Source
Allowed values:
AdvertisementNewspaperRadioRealEstateAgentFinancialAdvisorFriendFamilyReturnClientSearchEngineSocialMediaTelevisionOther
interestOnlyTermMonthsCount
string

Interest Only Term Months Count
interestOnlyInd
boolean

Interest Only Indicator
subjectProperty
object

Subject Property
addressLineText
string

Street Address
addressUnitIdentifier
string

Unit Id
city
string

City
county
string

County Name
state
string

State Code
postalCode
string

Zip Code
salesContractAmt
number

Sales Contract Amount
totalConcessionAmt
number

Total Concession Amount
housingType
string

Housing Type
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

Property Usage Type
Allowed values:
PrimaryResidenceInvestmentSecondHome
downPayment
number

Down Payment
totalMonthlyHousingExpenseAmt
number

Total PITI
amortizationTerm
number

Amortization Term
discountPoints
number

Discount Points
compensation
string

Compensation
compensationType
string

Compensation Type
grossLoanRevenue
number

Gross Loan Revenue
netLoanRevenue
number

Net Loan Revenue
earnestMoneyDeposit
string

Earnest Money Deposit
sellerCredit
string

Seller Credit
homeownersInsuranceMonthlyAmt
number

Housing Expense - Homeowners Insurance Monthly Amount
realEstateTaxMonthlyAmt
number

Housing Expense - Real Estate Tax Monthly Amount
mIPremiumMonthlyAmt
number

Housing Expense - MI Premium Monthly Amount
homeownersAssociationDuesAndCondominiumFeesMonthlyAmt
number

Housing Expense - Homeowners Association Dues And Condominium Fees Monthly Amount
purchaseDate
string

Purchase Date
lockStatus
number

Rate Lock Status
lockDate
string

Rate Lock Date
lockExpirationDate
string

Lock Expiry Date
loanOriginatorName
string

Loan Originator Name
loanOriginatorPhone
string

Loan Originator Phone Number
loanProcessorName
string

Loan Processor Name
loanProcessorPhone
string

Loan Processor Phone Number
loanOfficerAssistantEmail
string

Loan Officer Assistant Email
initialFixedPeriodEffectiveMonthsCount
number

Initial Fixed Period Effective Months Count
normalRateAdjustmentPeriod
number

Normal Rate Adjustment Period
lenderLoanIdentifier
string

Lender Loan Id
mersNumberforNonDel
string

MERS Number For Non Del
firstMortgagePrincipalAndInterestMonthlyAmt
number

Housing Expense - First Mortgage Principal And Interest Monthy Amount
floodInsuranceMonthlyAmt
number

Housing Expense - Flood Insurance Monthly Amount
amortizationType
string

Amortization Type
lienPosition
string

Lien Priority Type
lenderProductName
string

Lender Product Name
loanTerm
number

Loan Term
buyDown
string

Buydown
backEndDTI
number

BackEnd DTI
frontEndDTI
number

FrontEnd DTI
impoundWaiver
string

Escrow Impound Type
reimbursements
number

Reimbursements
toleranceCures
number

Tolerance Cures
brokerFee
number

Broker Fees
principalInterestAndPMI
number

Principal, Interest and MI
CreditReportFee
number

Credit Report Fee
ltv
number

LTV Ratio
cltv
number

Combined LTV Ratio
hcltv
number

HCLTV Ratio
loanStatusHistory
array[object]

Loan Stages
status
string

Status Name
date
string

Status Date
Example:
1990-01-01
adverseReason
string

Adverse Reason
Allowed values:
APP_DENIED_BY_LENDING_INSTITUTIONAPP_APPROVED_BUT_NOT_ACCEPTEDAPP_WITHDRAWN_BY_BORROWERFILE_CLOSED_FOR_INCOMPLETENESSPREAPPROVAL_APPROVED_BUT_NOT_ACCEPTEDPREAPPROVAL_DENIEDAPP_RESCINDED_BY_BORROWER
Default:
null
lenderName
string

Lender Name
lenderNMLS
string

Lender NMLS
keyDates
object

Key Dates
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
creditOrderDate
string

Credit Order Date
creditImportDate
string

Credit Import Date
creditExpirationDate
string

Credit Expiration Date
estimatedFundingDate
string

Estimated Funding Date
salesContractDate
string

Sales Contract Date
noteRate
number

Note Rate
loanTeam
array[object]

Loan Users
emailAddressText
string

User Email
firstName
string

User First Name
lastName
string

User Last Name
mobilePhone10digit
string

User Phone
loanRole
string

User Loan Role
primary
boolean

User Primary Status
employment
array[object]

Employment Info
employerName
string

Employers Name
positionDesc
string

Position Description
monthlyIncome
number

Monthly Income
employerPhone
number

Phone Number
classificationType
string

Classification Type
startDate
string

Start Date
endDate
string

Start Date
selfEmployedInd
boolean

Business Owner Or Self Employed
borrowerId
string

Borrower Id
employmentStatusType
string

Borrower Employment Status Type
employmentType
string

Borrower Employment Type
YearsOnJobCount
number

Borrower Years of Employment
MonthsOnJobCount
number

Borrower Months of Employment
EmployerAddress
object

Borrower Employer Address
businessContacts
array[object]

Business Contacts
firstName
string

First Name
lastName
string

Last Name
emailAddressText
string

Email
mobilePhone10digit
string

Phone
role
string

Role
companyName
string

Company Name
companyMailingAddress
object

Company Mailing Address
loanTrackers
array[object]

Loan Trackers
name
string

System Name
Allowed values:
APPRAISALHOITITLE
displayName
string

Display Name
Allowed values:
AppraisalHOITitle
currentTrackerStatus
object

Current Status
trackerStatusesHistory
array[object]

Status List
totalLoanAmount
number

Total Loan Amount
industryChannel
string

Industry Channel
archiveDate
string<date-time>

Loan Archive Date
originationLeadId
string<date-time>

Lead Id (if loan was converted from a lead)
estCashToClose
number

Estimated Cash To Close(Cash From/To Borrower)
orgUnitDisplayName
string

Loan Branch Display Name
orgUnitId
string

Loan Branch UUID
leadProvidedBy
string

Lead Provided By
fico
number

Loan FICO
settlementNumber
string

Settlement Number
documentationType
string

Alternate Doc Loan
Allowed values:
FULL_DOCFULL_DOC_24_MOFULL_DOC_12_MOPERS_BANK_STMT_12_MOPERS_BANK_STMT_24_MOBUS_BANK_STMT_12_MOBUS_BANK_STMT_24_MOASSET_UTILIZATIONNO_INCOMEREDUCED_DOCCPA_DOCCPA_DOC_24_MOCPA_DOC_12_MOTAX_DOC_24_MOTAX_DOC_12_MO1_YR_TAX_RETURNALT_DOC_24_MOALT_DOC_12_MOASSET_QUALIFIER1099_24_MO1099_12_MOCPA_PNL_12MO_WITHOUT_BKSTMTVOE_ONLYDEBT_SERVICE_COVERAGE_RATIO
Token
:
id*
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/loans/{id} \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '

{

  "ariveLoanId": 0,

  "sysGUID": "string",

  "loanCreatedFrom": "string",

  "financedFees": 0,

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

  "deepLinkURL": "string",

  "crmReferenceId": "string",

  "loanBorrowers": [

    {

      "firstName": "string",

      "lastName": "string",

      "nickName": "string",

      "emailAddressText": "string",

      "mobilePhone10digit": "string",

      "workPhone": "string",

      "homePhone": "string",

      "applicantType": "Borrower",

      "borrowerPairLoanAppSequence": 0,

      "monthOfBirth": "string",

      "dayOfBirth": "string",

      "maritalStatusType": "string",

      "posAppSubmissionDate": "string",

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

      "preferedLanguages": "string",

      "firstTimeHomeBuyer": true,

      "birthDate": "1990-01-01",

      "borrowerIncome": {}

    }

  ],

  "leadSource": "Advertisement",

  "interestOnlyTermMonthsCount": "string",

  "interestOnlyInd": true,

  "subjectProperty": {

    "addressLineText": "string",

    "addressUnitIdentifier": "string",

    "city": "string",

    "county": "string",

    "state": "string",

    "postalCode": "string",

    "salesContractAmt": 0,

    "totalConcessionAmt": 0,

    "housingType": "SingleFamily",

    "financedUnitCount": 0,

    "attachmentType": "Detached",

    "propertyUsageType": "PrimaryResidence"

  },

  "downPayment": 0,

  "totalMonthlyHousingExpenseAmt": 0,

  "amortizationTerm": 0,

  "discountPoints": 0,

  "compensation": "string",

  "compensationType": "string",

  "grossLoanRevenue": 0,

  "netLoanRevenue": 0,

  "earnestMoneyDeposit": "string",

  "sellerCredit": "string",

  "homeownersInsuranceMonthlyAmt": 0,

  "realEstateTaxMonthlyAmt": 0,

  "mIPremiumMonthlyAmt": 0,

  "homeownersAssociationDuesAndCondominiumFeesMonthlyAmt": 0,

  "purchaseDate": "string",

  "lockStatus": 0,

  "lockDate": "string",

  "lockExpirationDate": "string",

  "loanOriginatorName": "string",

  "loanOriginatorPhone": "string",

  "loanProcessorName": "string",

  "loanProcessorPhone": "string",

  "loanOfficerAssistantEmail": "string",

  "initialFixedPeriodEffectiveMonthsCount": 0,

  "normalRateAdjustmentPeriod": 0,

  "lenderLoanIdentifier": "string",

  "mersNumberforNonDel": "string",

  "firstMortgagePrincipalAndInterestMonthlyAmt": 0,

  "floodInsuranceMonthlyAmt": 0,

  "amortizationType": "string",

  "lienPosition": "string",

  "lenderProductName": "string",

  "loanTerm": 0,

  "buyDown": "string",

  "backEndDTI": 0,

  "frontEndDTI": 0,

  "impoundWaiver": "string",

  "reimbursements": 0,

  "toleranceCures": 0,

  "brokerFee": 0,

  "principalInterestAndPMI": 0,

  "CreditReportFee": 0,

  "ltv": 0,

  "cltv": 0,

  "hcltv": 0,

  "loanStatusHistory": [

    {

      "status": "string",

      "date": "1990-01-01",

      "adverseReason": null

    }

  ],

  "lenderName": "string",

  "lenderNMLS": "string",

  "keyDates": {

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

    "dateToAvoidEPO": "string",

    "creditOrderDate": "string",

    "creditImportDate": "string",

    "creditExpirationDate": "string",

    "estimatedFundingDate": "string",

    "salesContractDate": "string"

  },

  "noteRate": 0,

  "loanTeam": [

    {

      "emailAddressText": "string",

      "firstName": "string",

      "lastName": "string",

      "mobilePhone10digit": "string",

      "loanRole": "string",

      "primary": true

    }

  ],

  "employment": [

    {

      "employerName": "string",

      "positionDesc": "string",

      "monthlyIncome": 0,

      "employerPhone": 0,

      "classificationType": "string",

      "startDate": "string",

      "endDate": "string",

      "selfEmployedInd": true,

      "borrowerId": "string",

      "employmentStatusType": "string",

      "employmentType": "string",

      "YearsOnJobCount": 0,

      "MonthsOnJobCount": 0,

      "EmployerAddress": {

        "LineText": "string",

        "AdditionalLineText": "string",

        "City": "string",

        "County": "string",

        "State": "string",

        "Country": "string",

        "PostalCode": "string"

      }

    }

  ],

  "businessContacts": [

    {

      "firstName": "string",

      "lastName": "string",

      "emailAddressText": "string",

      "mobilePhone10digit": "string",

      "role": "string",

      "companyName": "string",

      "companyMailingAddress": {

        "streetAddress": "string",

        "unit": "string",

        "city": "string",

        "county": "string",

        "state": "string",

        "postalCode": "string"

      }

    }

  ],

  "loanTrackers": [

    {

      "name": "APPRAISAL",

      "displayName": "Appraisal",

      "currentTrackerStatus": {

        "name": "NOT_ORDERED",

        "displayName": "Not Ordered",

        "date": "2019-08-24T14:15:22Z"

      },

      "trackerStatusesHistory": [

        {

          "name": "NOT_ORDERED",

          "displayName": "Not Ordered",

          "date": "2019-08-24T14:15:22Z"

        }

      ]

    }

  ],

  "totalLoanAmount": 0,

  "industryChannel": "string",

  "archiveDate": "2019-08-24T14:15:22Z",

  "originationLeadId": "2019-08-24T14:15:22Z",

  "estCashToClose": 0,

  "orgUnitDisplayName": "string",

  "orgUnitId": "string",

  "leadProvidedBy": "string",

  "fico": 0,

  "settlementNumber": "string",

  "documentationType": "FULL_DOC"

}
