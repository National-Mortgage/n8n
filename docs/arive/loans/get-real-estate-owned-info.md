Get Real Estate Owned Info
get
https://gwapiconnect.myarive.com/api/loans/{id}/REO

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
responses
/
200
/
rows[]
.
propertyTaxes
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
Token
:
id*
:
limit
:
offset
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/loans/{id}/REO \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '

{

  "rows": [

    {

      "propertyStatus": "string",

      "maintenanceExpenseAmount": 0,

      "ownedUnitCount": 0,

      "netRentalIncome": 0,

      "homeOwnersInsurance": 0,

      "propertyTaxes": 0,

      "mortgageInsurance": 0,

      "associationOrProjectDues": 0,

      "otherAmount": 0,

      "streetAddress": "string",

      "city": "string",

      "state": "string",

      "zipCode": "string",

      "country": "string",

      "propertyType": "string",

      "currentMarketValue": 0,

      "currentUsage": "string",

      "proposedUsage": "string",

      "owners": [

        "string"

      ]

    }

  ],

  "count": 0

}
