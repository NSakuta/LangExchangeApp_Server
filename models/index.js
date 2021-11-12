const dbConfig = require('../config/db.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // mongoose promises equal to global promises

const db = {}; // data base

db.mongoose = mongoose;
db.url = dbConfig.url; // database url is db.config.js -> url
//db.users = require('./user.model')(mongoose) // connection to user model

module.exports = db;



