const express = require('express');

//! Utilisation du fichier « .env »
const { PORT } = process.env;

//! Creation de la Web API
const app = express();

//! Configuration
app.use(express.json());

//? ???

//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT} !`);
});