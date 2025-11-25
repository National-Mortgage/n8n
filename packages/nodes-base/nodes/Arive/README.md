# Arive Node

This is an n8n community node for Arive, a comprehensive mortgage loan origination system (LOS).

## Features

### Arive Node (Regular Actions)
The Arive node supports the following operations on loans:

#### Loan Operations
- **Create**: Create a new loan with borrower information, property details, and loan parameters
- **Get**: Retrieve detailed information about a specific loan
- **Get Many**: Search and retrieve multiple loans with filtering options
- **Update**: Update loan status and other loan details
- **Adverse**: Mark a loan as adversed with reason and compliance codes

### Arive Trigger Node (Webhooks)
The Arive Trigger node listens for webhook events from Arive:

#### Supported Events
- **Loan Events**:
  - Loan Created
  - Loan Updated
  - Loan Status Changed
  - Loan Adversed
  - Loan Approved
  - Loan Denied
  - Loan Closed

- **Document Events**:
  - Document Uploaded

- **Condition Events**:
  - Condition Added
  - Condition Status Changed

- **Borrower Events**:
  - Borrower Added

- **Communication Events**:
  - Disclosure Sent
  - Email Template Sent

## Setup

### Prerequisites
1. An Arive account with API access
2. API credentials (API Key and API Secret) generated from the Arive admin panel

### Credentials Configuration
1. In n8n, go to **Credentials** → **New**
2. Search for "Arive API"
3. Fill in the following fields:
   - **API Base URL**: Your Arive API endpoint (e.g., `https://api.arive.com`)
   - **API Key**: Your Arive API key
   - **API Secret**: Your Arive API secret
4. Click **Save**

### Using the Arive Node
1. Add a new node to your workflow
2. Search for "Arive"
3. Select your saved Arive credentials
4. Choose a **Resource** (currently supports "Loan")
5. Choose an **Operation**:
   - **Create**: Provide borrower details, property address, loan amount, and type
   - **Get**: Provide the loan ID
   - **Get Many**: Optionally add filters (status, loan officer, processor, date range, etc.)
   - **Update**: Provide loan ID, new status, and any fields to update
   - **Adverse**: Provide loan ID and reason for adversing

### Using the Arive Trigger Node
1. Add a new trigger node to your workflow
2. Search for "Arive Trigger"
3. Select your saved Arive credentials
4. Choose an **Event** to listen for
5. Activate the workflow - the trigger will automatically register a webhook with Arive
6. When the specified event occurs in Arive, your workflow will be triggered

## API Version Support

This node is built for Arive API v4.6, which includes support for:
- REST API integration (ZAPIER-compatible)
- Loan creation, search, retrieval, update, and adverse actions
- Enhanced email templates with editable To, Cc, and Bcc fields
- Service provider disclosure setup
- MISMO import support for adding borrowers
- Business contact management
- Purchase credit handling
- Loan condition enhancements

## Examples

### Example 1: Create a New Loan
```json
{
  "borrowerFirstName": "John",
  "borrowerLastName": "Doe",
  "borrowerEmail": "john.doe@example.com",
  "propertyAddress": "123 Main St, City, ST 12345",
  "loanAmount": 350000,
  "loanType": "conventional",
  "additionalFields": {
    "purchasePrice": 400000,
    "downPayment": 50000,
    "interestRate": 6.5,
    "loanPurpose": "purchase"
  }
}
```

### Example 2: Search for Active Loans
Configure the "Get Many" operation with:
- **Return All**: false
- **Limit**: 50
- **Filters**:
  - Status: active
  - Loan Officer ID: (optional)

### Example 3: Update Loan Status
Configure the "Update" operation with:
- **Loan ID**: `loan_12345`
- **Status**: approved
- **Update Fields**:
  - Interest Rate: 6.25
  - Notes: "Approved after verification"

### Example 4: Listen for Loan Approvals
Use the Arive Trigger node with:
- **Event**: Loan Approved
- Connect to subsequent nodes to send notifications, update CRM, etc.

## Troubleshooting

### Authentication Errors
- Verify your API Key and API Secret are correct
- Ensure your API Base URL is properly formatted (no trailing slash)
- Check that your Arive account has API access enabled

### Webhook Issues
- Ensure your n8n instance is publicly accessible for Arive to send webhooks
- Check webhook configuration in Arive admin panel
- Verify the workflow is activated

## Resources

- [Arive API Documentation](https://docs.arive.com/api)
- [Arive API Authentication](https://docs.arive.com/api/authentication)
- [Arive Webhooks Guide](https://docs.arive.com/api/webhooks)

## Version History

### 1.0
- Initial release
- Support for Loan operations (Create, Get, Get Many, Update, Adverse)
- Webhook trigger support for loan lifecycle events
- Based on Arive API v4.6

## License

[MIT](LICENSE.md)
