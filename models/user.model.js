const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// module.exports = mongoose => {
//     const User = mongoose.model(
//         "user",
//         mongoose.Schema({
//             firstName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
//             lastName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
//             email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
//             password: String,
//             gender: String,
//             age: { type: Number, min: 18, max: 65, required: true },
//             img: String,
//             zip: String,
//             interests: String,
//             description: String,
//             languages: {
//                 native: String,
//                 practice: String
//             },
//             favourites: [], 
//         }, {timestamps: true})
        
//     )
//     return User;  
// }

const userSchema = new mongoose.Schema({
    firstName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
    lastName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
    password: String,
    gender: String,
    age: { type: Number, min: 18, max: 65, required: true },
    img: String,
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






// var User = mongose.moderl(
//         new mongoose.Schema({
//     firstName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
//             lastName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
//             email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
//             password: String,
//             gender: String,
//             age: { type: Number, min: 18, max: 65, required: true },
//             img: String,
//             zip: String,
//             interests: String,
//             description: String,
//             languages: {
//                 native: String,
//                 practice: String
//             },
//             favourites: [], 
//     }, {timestamps: true});


// User.plugin(uniqueValidator, {message: 'is already taken.'});
// module.exports = mongoose.model('User', User);


// firstName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']}, //  any letter or digit will match
//             lastName: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
//             email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},

