let Portfolio = require('../model/portfolio');

let User = require('../auth/user');
var VerifyToken = require('../auth/verifyToken');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les portfolio (GET)
function getPortfolios(req, res){
    Portfolio.find((err, portfolios) => {
        if(err) res.send(err);
        res.send(portfolios);
    });
}

function getPortfolio(req, res){
    let username = req.params.username;
    let language = req.params.language;
    Portfolio.find({username: username, language: language}, (err, portfolio) => {
        if(err) res.send(err);
        res.json(portfolio);
    });
}

// Ajout d'un portfolio (POST)
function postPortfolio(req, res){
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        let portfolio = new Portfolio();
        portfolio.username = user.username;
        portfolio.language = req.body.language;
        portfolio.title = req.body.title;
        portfolio.type = req.body.type;
        portfolio.image = req.body.image;
        portfolio.link = req.body.link;
        portfolio.git = req.body.git;
        portfolio.description = req.body.phone;
        portfolio.save((err) => {
            if(err) res.send("can't post portfolio: ", err);
            res.json({ message: `Your portfolio has been saved !`});
        });
    });
}

// Update d'un portfolio (PUT)
function updatePortfolio(req, res, next) {
    let _id = req.params._id;
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Portfolio.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, portfolio) => {
            if(err) res.send(err);
            res.json({message: `portfolio updated`});
        });
    });
}

// suppression d'un portfolio (DELETE)
function deletePortfolio(req, res, next) {
    let _id = req.params._id;
    VerifyToken(req, res, next);
    User.findOne({_id: req.userId}, (err, user) => {
        if(err) res.status(500).send(err);
        if(!user) res.status(404).send("No user found.");
        // res.status(200).send(user);
        Portfolio.findOneAndRemove({_id: _id}, (err, portfolio) => {
            if(err) res.send(err);
            res.json({message: `portfolio deleted`});
        });
    });
}

module.exports = { getPortfolio, getPortfolios, updatePortfolio, deletePortfolio, postPortfolio };