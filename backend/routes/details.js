let Detail = require('../model/detail');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer tous les Details (GET)
function getDetails(req, res){
    Detail.find((err, details) => {
        if(err) res.send(err);
        res.send(details);
    });
}

function getDetail(req, res){
    let username = req.params.username;
    Detail.find({username: username}, (err, detail) =>{
        if(err) res.send(err);
        res.json(detail);
    });
}

// Ajout d'un Detail (POST)
function postDetail(req, res){
    let detail = new Detail();
    detail.username = req.body.username;
    detail.language = req.body.language;
    detail.name = req.body.name;
    detail.surname = req.body.surname;
    detail.age = req.body.age;
    detail.title = req.body.title;
    detail.phone = req.body.phone;
    detail.mail = req.body.mail;
    detail.linkedin = req.body.linkedin;
    detail.driving_licence = req.body.driving_licence;
    detail.github = req.body.github;
    detail.acm_account = req.body.acm_account;
    detail.address = req.body.adress;
    detail.postal_code = req.body.postal_code;
    detail.country = req.body.country;
    detail.save((err) => {
        if(err) res.send("can't post detail: ", err);
        res.json({ message: `Your detail has been saved !`});
    });
}

// Update d'un detail (PUT)
function updateDetail(req, res) {
    Detail.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, detail) => {
        if(err) res.send(err);
        res.json({message: `updated !`});
    });
}

// suppression d'un Detail (DELETE)
function deleteDetail(req, res) {
    Detail.findByIdAndRemove(req.params.id, (err, detail) => {
        if(err) res.send(err);
        res.json({message: `Details deleted`});
    });
}

module.exports = { getDetails, getDetail, updateDetail, deleteDetail, postDetail };