
# /users/register

This endpoint allows clients to register a new user.

## Request

• Method: `POST`  
• URL: `/users/register`  
• Content-Type: `application/json`

### Body (JSON)
```json
{
  "fullname": {
    "firstname": "string (required, min 3 chars)",
    "lastname": "string (optional, min 3 chars)"
  },
  "email": "string (required, must be valid email)",
  "password": "string (required, min 6 chars)"
}
```

## Response

• **201 Created** – Returns a JSON object with the `token` and `user` data on successful registration.  
• **400 Bad Request** – If validation fails or required fields are missing.