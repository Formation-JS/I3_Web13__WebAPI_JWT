const express = require('express');
const messageRouter = require('./routes/message.route');
const authRouter = require('./routes/auth.route');
const jwtTool = require('./tools/jwt.tool');

//! Utilisation du fichier « .env »
const { PORT } = process.env;

//! Creation de la Web API
const app = express();

//! Configuration
app.use(express.json());

//! Middleware pour gérer le jwt
app.use((req, res, next) => {
    // Récuperation du token dans la requete
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        next();
        return;
    }

    // On créer un props "token" sur l'objet "req"
    req.token = jwtTool.read(token);
    next();
});

//! Routes
app.use(messageRouter);
app.use(authRouter);

//! Démarrage de la WebAPI
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT} !`);
});