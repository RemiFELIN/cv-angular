let Portfolio = require('../model/portfolio');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les portfolio (GET)
function getPortfolios(req, res){
    Portfolio.find((err, portfolios) => {
        if(err) res.send(err);
        res.send(portfolios);
    });
}

// Récupérer un portfolio par son uuid (GET)
function getPortfolio(req, res){
    let portfolioUuid = req.params.uuid;
    Portfolio.find({uuid: portfolioUuid}, (err, portfolio) =>{
        if(err) res.send(err);
        res.json(portfolio);
    });
}

// Ajout d'un portfolio (POST)
function postPortfolio(req, res){
    let portfolio = new Portfolio();
    portfolio.id = req.body.id;
    portfolio.uuid = req.body.uuid;
    portfolio.language = req.body.language;
    portfolio.type = req.body.type;
    portfolio.image = req.body.image;
    portfolio.link = req.body.link;
    portfolio.git = req.body.git;
    portfolio.description = req.body.phone;
    portfolio.save((err) => {
        if(err) res.send("can't post portfolio: ", err);
        res.json({ message: `Your portfolio has been saved !`});
    });
}

// Update d'un portfolio (PUT)
function updatePortfolio(req, res) {
    portfolio.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, portfolio) => {
        if(err) res.send(err);
        res.json({message: `portfolio updated`});
    });
}

// suppression d'un portfolio (DELETE)
function deletePortfolio(req, res) {
    portfolio.findByIdAndRemove(req.params.id, (err, portfolio) => {
        if(err) res.send(err);
        res.json({message: `portfolio deleted`});
    });
}

module.exports = { getPortfolio, getPortfolios, updatePortfolio, deletePortfolio, postPortfolio };