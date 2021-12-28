const config = require("../config/auth.config");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const User = require('../models/user.model');
  

exports.signup = (req, res) => {
        if(!(req.body.firstName && req.body.lastName && req.body.email && req.body.password)) {
            res.status(400).send({message: 'Request body cannot be empty'})
            return;
        }
    
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            gender: req.body.gender,
            age: req.body.age,
            img: req.body.img,
            about: req.body.about,
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
  };

exports.signin = (req, res) => {
  User.findOne({
    email: req.body.email
  })
  .then((user) => {
    if (!user) {
        return res.status(401).send({ message: "User Not found." });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        id: user._id,
        accessToken: token,
      });
  })
      
};