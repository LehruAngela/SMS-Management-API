# SMS-Management-API
This is an API written in NodeJS, Express.js framework using MongoDB as the data store. The endpoints mentioned below allow a user to signup to create an account and login to send sms messages, get details of an sms including the status of an sms and delete contacts with all the messages they have ever sent. 

## Set-up
To get the project up and running, clone the project;
1. To install all the dependencies of the project, run the command below; 
```
npm install
```
2. To start the node server;
```
npm run start:dev
```
3. To build the project;
```
npm run build
```
4. To set up the environment variables, create a .env file and add the variables in the .env.example


## Documentation
| Type | API Endpoint | Functionality | 
| --- | --- | --- | 
| POST | /signup | Endpoint to signup user | 
| POST | /login | Endpoint to login user | 
| POST | /:sender/sendSMS | Endpoint to send an SMS | 
| GET | /:smsId/getSMS | Endpoint to get details of an SMS | 
| GET | /getContact | Endpoint to get details of a contact | 
| DELETE | /:name/deleteContact | Endpoint to delete a contact and all messages sent by the contact |

### /signup 
```
{
    "name": "TestUser",
    "phoneNumber": "070.......",
    "password": "1...."
}
```

### /login
```
{ 
    "phoneNumber": "070.......",
    "password": "1...."
}
```

### /:sender/sendSMS
```
{
    "receiver": "070.......",
    "message": "Hey"
}
```