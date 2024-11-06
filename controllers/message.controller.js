
const messageController = {

    public: function(req, res) {
        
        res.json('Hello World !');
    },

    protected: function(req, res) {

        res.json(`Hello ???`);
    }

};
module.exports = messageController;