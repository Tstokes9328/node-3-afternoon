const swag = require('../models/swag');

module.exports = {

    add: (req, res, next) => {
        let { id } = req.qeury;
        let index = cart.findIndex(swag => swag.id == id);

        if(!id){
            let foundSwag = swag.find(swag => swag.id == id)
            cart.push(foundSwag);
            req.session.user.total += foundSwag.price
        }   
        res.status(200).send(req.session.user)
    },

    delete: (req, res, next) => {
        let {id} = req.qeury;

        if( foundSwag){
        const i = req.session.user.cart.findIndex(swag => swag.id == id);
        req.session.user.cart.splice(i, 1);
        req.session.user.total -= foundSwag.price;
        }
        res.status(200).send(req.session.user);
    },

    checkout: (req, res, next) => {
        let {user} = req.session;
        user.total = 0;
        user.cart = [];
        res.status(200).send(req.session.user)
    },
}