const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
    lastName: {type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
    password: {type: String, required: [true, "can't be blank"]},
    gender: String,
    age: { type: Number, min: 18, max: 65, required: true },
    img: String,
    about: String,
    zip: String,
    interests: String,
    description: String,
    nativeLanguage: String,
    practiceLanguage: String,
    favourites: [], 
}, {timestamps: true}
)

userSchema.plugin(uniqueValidator, {message: 'is already taken.'});

const User = mongoose.model('user', userSchema);

module.exports = User;

