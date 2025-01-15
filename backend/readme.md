# /users/register

This endpoint allows clients to register a new user.

## Request

- Method: `POST`  
- URL: `/users/register`  
- Content-Type: `application/json`

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

- **201 Created** – Returns a JSON object with the `token` and `user` data on successful registration.  
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
- **400 Bad Request** – If validation fails or required fields are missing.  
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

- Method: `POST`  
- URL: `/users/login`  
- Content-Type: `application/json`

### Body (JSON)
```json
{
  "email": "string (required, must be valid email)",
  "password": "string (required, min 6 chars)"
}
```

## Response

- **200 OK** – Returns a JSON object with the `token` and `user` data on successful login.  
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
- **400 Bad Request** – If validation fails or required fields are missing.  
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
- **401 Unauthorized** – If the email or password is incorrect.  
```json
{
  "message": "Invalid email or password"
}
```

# /users/profile

This endpoint allows clients to get their profile information.

## Request

- Method: `GET`  
- URL: `/users/profile`  
- Headers: 
  - `Authorization: Bearer <token>`

## Response

- **200 OK** – Returns the user profile data
```json
{
  "_id": "string",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string"
}
```
- **401 Unauthorized** – If no token is provided or token is invalid
```json
{
  "message": "Unauthorized"
}
```

# /users/logout

This endpoint allows clients to logout and invalidate their token.

## Request

- Method: `GET`  
- URL: `/users/logout`  
- Headers: 
  - `Authorization: Bearer <token>`

## Response

- **200 OK** – Returns success message when logout is successful
```json
{
  "message": "Logged out successfully"
}
```
- **401 Unauthorized** – If no token is provided or token is invalid
```json
{
  "message": "Unauthorized"
}
```

# /captains/register

This endpoint allows clients to register a new captain.

## Request

- Method: `POST`  
- URL: `/captains/register`  
- Content-Type: `application/json`

### Body (JSON)
```json
{
  "fullname": {
    "firstname": "string (required, min 3 chars)",
    "lastname": "string (optional, min 3 chars)"
  },
  "email": "string (required, must be valid email)",
  "password": "string (required, min 6 chars)",
  "vehicle": {
    "color": "string (required, min 3 chars)",
    "plate": "string (required, min 3 chars)",
    "capacity": "number (required)",
    "vehicleType": "string (required, must be 'car', 'motorcycle', or 'auto')"
  }
}
```

## Response

- **201 Created** – Returns a JSON object with the `token` and `captain` data on successful registration.  
```json
{
  "token": "string",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```
- **400 Bad Request** – If validation fails or required fields are missing.  
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



# /captains/login

This endpoint allows captains to log in.

## Request

- Method: `POST`  
- URL: `/captains/login`  
- Content-Type: `application/json`

### Body (JSON)
```json
{
  "email": "string (required, must be valid email)",
  "password": "string (required, min 6 chars)"
}
```

## Response

- **200 OK** – Returns a JSON object with the `token` and `captain` data on successful login.  
```json
{
  "token": "string",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicleType": "string"
    }
  }
}
```
- **400 Bad Request** – If validation fails or required fields are missing.  
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
- **401 Unauthorized** – If the email or password is incorrect.  
```json
{
  "message": "Invalid email or password"
}
```

# /captains/profile

This endpoint allows captains to get their profile information.

## Request

- Method: `GET`  
- URL: `/captains/profile`  
- Headers: 
  - `Authorization: Bearer <token>`

## Response

- **200 OK** – Returns the captain profile data
```json
{
  "_id": "string",
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}
```
- **401 Unauthorized** – If no token is provided or token is invalid
```json
{
  "message": "Unauthorized"
}
```

# /captains/logout

This endpoint allows captains to logout and invalidate their token.

## Request

- Method: `GET`  
- URL: `/captains/logout`  
- Headers: 
  - `Authorization: Bearer <token>`

## Response

- **200 OK** – Returns success message when logout is successful
```json
{
  "message": "Logged out successfully"
}
```
- **401 Unauthorized** – If no token is provided or token is invalid
```json
{
  "message": "Unauthorized"
}