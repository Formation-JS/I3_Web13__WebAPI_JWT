const express = require('express');
const messageController = require('../controllers/message.controller');


const messageRouter = express.Router(); 

messageRouter.get('/message/public', messageController.public);
messageRouter.get('/message/protected', messageController.protected);

module.exports = messageRouter;