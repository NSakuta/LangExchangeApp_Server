const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    uploadedBy: String,
    url: String
}, {timestamps: true});

const Image = mongoose.model('image', imageSchema);

module.exports = Image;