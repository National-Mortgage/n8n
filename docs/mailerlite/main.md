Getting started
#
MailerLite API

MailerLite API is RESTful, fully-featured, and easy to integrate with.

You can use your favorite HTTP/REST library that is available for your programming language to make HTTP calls.

You must send JSON payloads in your requests and expect to get JSON responses. Don't forget to add these headers to each and every request.

Content-Type: application/json
Accept: application/json

Use the following base URL for all API endpoints:

https://connect.mailerlite.com/api

#
SDK

MailerLite supports this list of official libraries for your favorite programming languages. This is the easiest way to integrate MailerLite with your application.

    MailerLite PHP

MailerLite GoMailerLite Node.jsMailerLite PythonMailerLite Ruby
#
Authentication
#
API keys

API keys are a quick way to implement machine-to-machine authentication without any direct inputs from a human beyond initial setup.

For example, you might want to run a scheduled job to sync your CRM data to your MailerLite account.

You can generate an API key by opening MailerLite
, navigating to Integrations and choosing MailerLite API

. Then click "Generate new token". Give it a name to help you identify where it's used in the future, e.g. "CRM sync job - production".

Once the key is generated, please copy and store it immediately. We will not be able to show this API key again in the future, as we don't store API keys in plain text for security reasons. If you lose it, you will have to replace it with a new API key.

Once you have your API key, provide it in an Authorization header together with your request payload, where XXX is your token:

Authorization: Bearer XXX

If you fail to provide a valid token, you'll get this response on all requests.

Response Code: 401 Unauthorized

{
  "message": "Unauthenticated."
}

#
Versioning

All requests use the latest version, unless you override the API version. To lock down the API version, provide the current date at the time of implementation through X-Version header.

X-Version: 2038-01-19

#
Validation errors

You might encounter validation errors when sending requests to API endpoints. They will come in the following format

Response Code: 422 Unprocessable Entity
Content-Type: application/json

{
  "message": "The given data was invalid.",
  "errors": {
    "email": ["The email must be a valid email address."]
  }
}

#
Rate limits

MailerLite API has a global rate limit of 120 requests per minute. If you exceed that rate limit you will receive a 429 error response with a “Too Many Attempts” message. If you think you will be hitting these limits, please use batch endpoint and/or implement backoff strategy that would even out the requests over time.

Response Code: 429 Too Many Attempts
Content-Type: application/json
X-RateLimit-Limit: 120
X-RateLimit-Remaining: 0
Retry-After: 119

{
  "message": "Too Many Attempts."
}

#
HTTP status codes

MailerLite returns standard HTTP response codes.
Code	Name	Explanation
200	OK	The request was accepted.
201	Created	Resource was created.
202	Accepted	The request was accepted and further actions are taken in the background.
204	No Content	The request was accepted and there is nothing to return.
400	Bad Request	There was an error when processing your request. Please adjust your request based on the endpoint requirements and try again.
401	Unauthorized	The provided API token is invalid.
403	Forbidden	The action is denied for that account or a particular API token.
404	Not Found	The requested resource does not exist on the system.
405	Method Not Allowed	HTTP method is not supported by the requested endpoint.
408	Request Timeout	There is an error on our system. Please contact support
422	Unprocessable Entity	There was a validation error found when processing the request. Please adjust it based on the endpoint requirements and try again.
429	Too Many Requests	There were too many requests made to the API.
500	Internal Server Error	There was an error on our system. Please contact support
502	Bad Gateway	There was an error on our system. Please contact support
503	Service Unavailable	There was an error on our system. Please contact support
504	Gateway Timeout	There was an error on our system. Please contact support
More info on HTTP response codes can be found on Mozilla Developer Network

.
#
