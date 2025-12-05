Get Borrowers Credit Info
get
https://gwapiconnect.myarive.com/api/loans/{loanId}/additionalInfo

Get Borrowers Credit Score Info by Id
Request
Path Parameters
loanId
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

Additional Data
Body
creditScores
array[object]
required

List of borrower credit scores
BorrowerName
string
required

Borrower full name
CreditScoreDetails
object

Credit scores details
Default:
{}
BorrowerRole
string
required

Role of the borrower
Allowed values:
BorrowerCosignerNonTitleSpouseTitleHolder
Token
:
loanId*
:
X-API-KEY*
:

curl --request GET \
  --url https://gwapiconnect.myarive.com/api/loans/{loanId}/additionalInfo \
  --header 'Accept: application/json' \
  --header 'Authorization: Bearer 123' \
  --header 'X-API-KEY: '

{

  "creditScores": [

    {

      "BorrowerName": "string",

      "CreditScoreDetails": {

        "experian": 0,

        "equifax": 0,

        "transunion": 0

      },

      "BorrowerRole": "Borrower"

    }

  ]

}
