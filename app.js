const express = require('express');
const messageRouter = require('./routes/message.route');

//! Utilisation du fichier « .env »
const { PORT } = process.env;

//! Creation de la Web API
const app = express();

//! Configuration
app.use(express.json());

//! Routes
app.use(messageRouter);

//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT} !`);
});