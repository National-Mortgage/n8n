# Arive API-Connect
v1.0
Steps to Integrate using Zapier

    Login to Zapier
    Click "+ Create Zap"
    If you want to use ARIVE Webhooks to create/update data in another system, search "ARIVE API" in applications
    Select Trigger
    Click "Connect a new Account"
    Copy API credentials from ARIVE under "Integration" screen
    Put ARIVE API credentials copied from previous step to zapier authentication screen
    Click Test Trigger (This will fetch a record from your pipeline) to verify integration. Click Continue
    Select Target Application (e.g. Pipedrive or Salesforce)
    Select action on Target Application (e.g. Create Deal or Create Contact etc.)
    Map ARIVE data fields to Target system fields (Setup Action)
    Click "Test Action"
    Click "Turn on Zap"

Sending Data to ARIVE
If you want to put data in ARIVE from external system, select that application in step

# login
post
/api/auth/login

Log on to the Portal
Request
Headers
X-API-KEY
string
required

ARIVE API Key
Body
clientId
string
required

Client ID (Issued by ARIVE)
secret
string
required

Secret Access Key
apiKey
string
required

API Key
appId
string
required

App Id
appSecretHash
string
required

App Secret Hash (created with client id, app id and App Secret)
Responses
200
401

Valid Credentials
Body
AccessToken
string
required

Access Token
ExpiresIn
number
required

Expiration (in seconds)
TokenType
string
required

Token Type

# Get Loan

Get Loan Details
get
/api/loans/{id}

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
responses
/
200
/
estCashToClose
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
leadSource
string

Lead Source
Allowed values:
AdvertisementNewspaperRadioRealEstateAgentFinancialAdvisorFriendFamilyReturnClientSearchEngineSocialMediaTelevisionOther
referralContactSourceName
string

Referral Contact Name
referralContactSourceEmail
string

Referral Contact Email
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
documentationType
string

Alternate Doc Loan
Allowed values:
FULL_DOCFULL_DOC_24_MOFULL_DOC_12_MOPERS_BANK_STMT_12_MOPERS_BANK_STMT_24_MOBUS_BANK_STMT_12_MOBUS_BANK_STMT_24_MOASSET_UTILIZATIONNO_INCOMEREDUCED_DOCCPA_DOCCPA_DOC_24_MOCPA_DOC_12_MOTAX_DOC_24_MOTAX_DOC_12_MO1_YR_TAX_RETURNALT_DOC_24_MOALT_DOC_12_MOASSET_QUALIFIER1099_24_MO1099_12_MOCPA_PNL_12MO_WITHOUT_BKSTMTVOE_ONLYDEBT_SERVICE_COVERAGE_RATIO

# Create New Loan
post
/api/loans

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

# Search All Loans
get
/api/loans

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
mortgageType
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

# Get Real Estate Owned Info
get
/api/loans/{id}/REO

Get Real Estate Owned Info by Id
Request
Path Parameters
id
string
required
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
Headers
X-API-KEY
string
required

ARIVE API Key
Responses
200
401
404

Loan REO Object
Body
rows
array[object]
required

Get REO List
propertyStatus
string

Disposition Status Type
maintenanceExpenseAmount
number

Maintenance Expense Amount
ownedUnitCount
number

Owned Unit Count
netRentalIncome
number

Net Rental Income Amount
homeOwnersInsurance
number

Homeowner Insurance Amount
propertyTaxes
number

Property Tax Amount
mortgageInsurance
number

Mortgage Insurance Amount
associationOrProjectDues
number

HOA Dues Amount
otherAmount
number

Other Amount
streetAddress
string

Street Address
city
string

City
state
string

State
zipCode
string

Zip Code
country
string

Country
propertyType
string

Property Type
currentMarketValue
number

Current Market Value
currentUsage
string

Current Usage
proposedUsage
string

Proposed Usage
owners
array[string]

List of Borrowers
count
number
required

Total Count of REOs

# Update Loan Status
patch
/api/loans/{id}

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

# Adverse Loan
patch
/api/loans/{id}/adverse

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

# Update Key Dates
patch
/api/loans/{id}/key-dates

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

# Create new Lead
post
/api/leads

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

# Search all Leads
get
/api/leads

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
coBorrower
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

# Get Lead
get
/api/leads/{id}

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
InterestOnlyTerm
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

# Update Lead
patch
/api/leads/{id}

Update Lead Data
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
crmReferenceId
string

CRM Reference Id
leadProvidedBy
string

Lead Provided By
assigneeEmail
string

Email of Primary Lead Owner
loanPurpose
string

Loan Purpose
Allowed values:
PurchaseRefinance
borrower
object

Borrower
firstName
string

Borrower First Name
lastName
string

Borrower Last Name
birthDate
string

Borrower Birth Date
emailAddressText
string

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
totalMonthlyIncome
number

Borrower Total Monthly Income
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
annualIncome
number

Borrower Annual Income
totalLiability
number

Borrower Total Monthly Liability
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
number

Address Duration In Months
durationYearsCount
number

Address Duration In Years
Responses
200
401
404

Update Successful
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

# Convert Lead to Loan
post
/api/leads/{id}/leadtoloan

Convert Lead to Loan
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
loanOfficerEmail
string
required

Loan Officer Email
Responses
201
401

The Lead has been successfully converted to Loan.
Body
ariveLeadId
number

ARIVE Display Lead Id
ariveLoanId
number

ARIVE Display Loan Id
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

# Subscribe to ARIVE Events
post
/api/hooks/subscribe

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


# Get Hook Subscriptions
get
/api/hooks

Get subscriptions for the authenticated user. Filtered by credential type used.
Request
Query Parameters
event
string
status
string
Headers
X-API-KEY
string
required

ARIVE API Key
Responses
200


# Unsubscribe from ARIVE Events
delete
/api/hooks/unsubscribe/{id}

Unsubscribe from hooks
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
