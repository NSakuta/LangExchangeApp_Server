const db = require('../models');

//const User = db.users;

const User = require('../models/user.model');

//Create (post)

exports.create = (req, res) => {
    // console.log('request: ', req.body.firstName)
    if(!(req.body.firstName && req.body.lastName && req.body.email && req.body.password)) {
        res.status(400).send({message: 'Request body cannot be empty'})
        return;
    }

    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        age: req.body.age,
        img: req.body.img,
        zip: req.body.zip,
        interests: req.body.interests,
        description: req.body.description,
        nativeLanguage: req.body.nativeLanguage,
        practiceLanguage: req.body.practiceLanguage,
        favourites: req.body.favourites,
    })

    ///////////////////Connect to DB --> response with _id, timestamps

    newUser
        .save() // async method
         .then(data => {
             res.send(data)
         }).catch(err => {
             res.status(500).send({
                 message: err.message || 'Some error occurred while creating a new user'
                })
         })
}


///CRUD (Create, read, update, remove)

//Read (get)

exports.getAll = (req, res) => {
    User.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while reading all users'
            })
        })
}

//Read (get)

exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while searching a user by id'
            })
        })
}

//Update (get)

exports.update = (req, res) => {
    if(!req.body) {
        res.status(400).send({message: 'Request body cannot be empty'})
        return;
    }

    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, {useFindAndModify: true})
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: `User with id(${id}) was not found` 
            })
        } else {
            res.send({
                message: `User with id(${id}) was successfully updated`
            })
        }
    })
    .catch(err => {
       res.status(500).send({
           message: err.message || `Some error occurred while updating a user with id(${id})`
       })
    })
}



