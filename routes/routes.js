module.exports = app => {
    const users = require('../controllers/user.controller');
    const messages = require('../controllers/message.controller');
    const router = require('express').Router();


    //users
    router.get('/users', users.getAll);
    router.get('/users/:id', users.getUserById);
    router.post('/users', users.create);
    router.put('/users/:id', users.update);

    //messages
    router.post('/messages', messages.create);
    router.get('/messages', messages.getAllMessages);
    router.get('/messages/sent/:id', messages.getSentMessagesByUserId);
    router.get('/messages/received/:id', messages.getReceivedMessagesByUserId);
    router.put('/messages/sent/:id', messages.updateMessage)
    router.put('/messages/received/:id', messages.updateMessage)

    app.use('/api', router);
}

