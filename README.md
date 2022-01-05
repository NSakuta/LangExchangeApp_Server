# LangExchangeApp_Server

A Web Application for people who want to find a partner to practice languages, exchange some knowledge (similar to the Tandem). 

Application functions:

    Signin / signout 
    Registration
    Filter people by practice or native language
    Send/receive messages
    Change profile information
    Add people to favorites 

/////////////////////////////////////

Backend:

    Node.js and 'express' library was used to build the backend
    'mongoose' library was used to create “User” and “Message” Model / send data to MongoDB database
    Password hashing with 'bcryptjs' library
    Token providing and verification with 'jsonwebtoken'
    Photo upload with 'multer'/'multerS3' libraries
 

                    API Endpoints

Authorization

    (post) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/auth/signup/ - post a new user

Authentication

    (post) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/auth/signin - login action

Users

    (get) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/users - get all users
    (get) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/users/:id - get user by id
    (put) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/users/:id - update user by id
    (get) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/users/name/:firstName - get user by the first name
    (get) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/users/email/:email - get user by the email

Messages

    (post) (token required) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/messages - post a new message
    (get) (token required) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/messages - get all messages

Photo upload

    (post) http://ec2-3-21-19-104.us-east-2.compute.amazonaws.com/api/upload/image - post a new photo
