# Business Loan Application

## Micro-service Architecture followed

- Frontend
- Backend Layer
- Platform Integration

I have created this 3 separate repositories but for the submission and accessability this have been clubbed into a single repo (this).

I have created separate branch for each service.

The frontend access link can be found in the About section of this repo.

### Backend

#### GET /api/balance-sheet

query params-
userId (required) : string
provider (required ): "MYOB" || "xero"

both this will be send to the Platform Integration by the backend
assuming authentication between the backend and Platform Integration is Successful
the data.json file is created on the Platform Integration which is fetched by the backend

returns:

On Success

```
{
  "balanceSheet":[
    {
      "year":number,
      "month":number,
      "profitOrLoss":number,
      "assetsValue":number,
    }
    <!-- many more such objects... -->
  ]
}

```

on Failure

```
{
  "error":string
}
```

#### POST /api/balance-sheet

req body

```
{
  "loanAmount": number
}
```

loan amount should be greater than 0

On Success

```
{
  "approvalStatus": {
    "loanStatus": boolean
  },
  "preAssessment": 20
}

```

loanStatus will be random Implemented on the Platform Integration

\*\*An API call is made again to fetch the balance-sheet.

preAssessment will be 20 ,60 or 100 based on given conditions ( Calculated on the Backend Layer @utils/calculatePreAssessment )

Assuming business details will be fetched by the backend form the database or the Accounting Software

on Failure

```
{
  "error":string
}
```
