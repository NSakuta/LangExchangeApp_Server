const User = require('../models/user.model');

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

// Get User by Name

exports.getUserByName = (req, res) => {
    User.find({"firstName": req.params.firstName})
        .then(data => {
            res.send(data)
            })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while searching user by name'
            })
        })
}

// Get User by Email

exports.getUserByEmail = (req, res) => {
    User.find({"email": req.params.email})
        .then(data => {
            res.send(data)
            })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while searching user by name'
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



