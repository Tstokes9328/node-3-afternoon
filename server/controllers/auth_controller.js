const users = require('../models/users');
id = 1;

module.exports = {

    login: (req, res, next) => {
        let {session} = req;
        let {username, password} = req.body;

        const user = users.find(user => user.username === username && user.password === password)

        if(user){
            session.user.username = user.username
            res.status(200).send(session.user)
        }else {
            res.status(500).send('Not Authorized!!')
        }
    },

    register: (req, res, next) => {
        let {session} = req;
        let {username, password} = req.body;
        users.push({id, username, password});
        id++;
        session.user.username = username;
        res.status(200).send(session.user);
    },

    signOut: (req, res, next) => {
        req.session.destroy();
        res.status(200).send(req.session);
    },

    getUser: (req, res, next) => {
        res.status(200).send(req.session.user);
    }
}