const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sentBy: String,
    recipient: String,
    text: String
}, {timestamps: true});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;