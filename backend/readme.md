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
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```
• **400 Bad Request** – If validation fails or required fields are missing.  
```json
{
  "errors": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
```

# /users/login

This endpoint allows clients to log in an existing user.

## Request

• Method: `POST`  
• URL: `/users/login`  
• Content-Type: `application/json`

### Body (JSON)
```json
{
  "email": "string (required, must be valid email)",
  "password": "string (required, min 6 chars)"
}
```

## Response

• **200 OK** – Returns a JSON object with the `token` and `user` data on successful login.  
```json
{
  "token": "string",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```
• **400 Bad Request** – If validation fails or required fields are missing.  
```json
{
  "errors": [
    {
      "msg": "string",
      "param": "string",
      "location": "string"
    }
  ]
}
```
• **401 Unauthorized** – If the email or password is incorrect.  
```json
{
  "message": "Invalid email or password"
}
```