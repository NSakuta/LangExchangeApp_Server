module.exports = app => {
    const users = require('../controllers/user.controller');
    const messages = require('../controllers/message.controller');
    const router = require('express').Router();
    const uploadMdlware = require('../middleware/upload');

    const authJwt = require('../middleware/authJwt');

    //users
    router.get('/users', users.getAll);
    router.get('/users/:id', users.getUserById);
    router.put('/users/:id', users.update);
    router.get('/users/name/:firstName', users.getUserByName);
    router.get('/users/email/:email', users.getUserByEmail);

    //messages
    router.post('/messages', [authJwt], messages.create);
    router.get('/messages', [authJwt], messages.getAllMessages);
    
    // router.get('/messages/sent/:id', [authJwt], messages.getSentMessagesByUserId);
    // router.get('/messages/received/:id', [authJwt], messages.getReceivedMessagesByUserId);
    // router.put('/messages/sent/:id', [authJwt], messages.updateMessage)
    // router.put('/messages/received/:id', [authJwt], messages.updateMessage)

    app.use('/api', router);
}

