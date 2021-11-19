const Message = require("../models/message.model");

exports.create = (req, res) => {
    if(!(req.body.recipient)){ //req.body.sentBy 
        res.status(400).send({message: 'New Message error. Request body cannot be empty'});
        return;
    }

    const newMessage = new Message({
        sentBy: req.body.sentBy,
        recipient: req.body.recipient,
        text: req.body.text
    })

    newMessage
    .save()
        .then(data => {
            res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'Some error occurred while adding a new message'
        })
    })
}

//GET all messages

exports.getAllMessages = (req, res) => {
    Message.find()
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                message: err.message || 'Error occured while reading all messages'
            })
        })
}


///////////////////////////////////////////////////////////////////////////////////////////////////

// //GET sent messages 

// exports.getSentMessagesByUserId = (req, res) => {
//     const id = req.params.id
//     Message.find({"sentBy": id})
//         .then(data => {
//             res.send(data)
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || `Some error occured while searching sent messages by id(${id}`
//             })
//         })
// }


// //GET (get all received messages)

// exports.getReceivedMessagesByUserId = (req, res) => {
//     const id = req.params.id;

//     Message.find({'recipient': id})
//         .then(data => {
//             res.send(data)
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || `Some error occured while searching received messages by id(${id}`
//             })
//         })
// }

// //PUT (update message)

// exports.updateMessage = (req, res) => {
//     if(!(req.body.sentBy && req.body.recipient)){
//         res.status(400).send({
//             message: `Update message error by ID(${req.body._id}). Request body cannot be empty`
//         })
//         return;
//     } 

//     Message.findByIdAndUpdate(req.body._id, req.body)
//         .then(data => {
//             res.send(data)
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || `Error while updating message with id(${id}`
//             })
//         })
// }

// //DELETE message by id


