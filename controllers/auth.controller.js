const jwtTool = require('../tools/jwt.tool');

const authController = {

    login: function(req, res) {
        const { username, password } = req.body;
        
        // Fake validation (Cas réel -> Utilisation d'un DB)
        if(username !== 'della' || password !== 'Test1234=') {

            res.status(400).json({ error: 'Credentials invalides!'});
            return;
        }
        
        // Donnée de l'utilisateur (Cas réel -> Récuperation des données de profile)
        const data = {
            id: 42,
            name: username
        }

        // Générer un JWT
        const token = jwtTool.generate(data);

        // Reponse avec le token d'authentification
        res.status(200).json({ token });
    },

    register: function (req, res) {

        res.sendStatus(501);
    }
};
module.exports = authController;