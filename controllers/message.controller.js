
const messageController = {

    public: function(req, res) {
        
        res.json('Hello World !');
    },

    protected: function(req, res) {
        if(!req.token) {
            res.sendStatus(401);
            return;
        }

        const username = req.token.name;

        res.json(`Hello ${username}`);
    }

};
module.exports = messageController;