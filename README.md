 SMS-Management-API

#### Documentation
Endpoint | Functionality | Sample Body | Sample Response
------------ | -------------
POST /signup | Endpoint to signup user | {
	"name": "TestUser",
    "phoneNumber": "070000000",
    "password": "12..."
} | {
    "status": "success",
    "data": {
        "message": "Successfully created contact",
        "name": "TestUser",
        "phoneNumber": "0700000000",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
    }
}
POST /login | Endpoint to login user | 
POST /:sender/sendSMS | Endpoint to send an SMS | 
GET /:smsId/getSMS | Endpoint to get details of an SMS | 
GET /getContact | Endpoint to get details of a contact | 
PUT /:name/deleteContact | Endpoint to delete a contact | 