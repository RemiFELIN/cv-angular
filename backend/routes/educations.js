let Education = require('../model/education');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer toutes les formations (GET)
function getEducations(req, res){
    Education.find((err, educations) => {
        if(err) res.send(err);
        res.send(educations);
    });
}

function getEducation(req, res){
    let username = req.params.username;
    let language = req.params.language;
    Education.find({username: username, language: language}, (err, education) =>{
        if(err) res.send(err);
        res.json(education);
    })
}

// Ajout d'une formation (POST)
function postEducation(req, res){
    let education = new Formation();
    education.username = req.params.username;
    education.language = req.body.language;
    education.start_year = req.body.start_year;
    education.end_year = req.body.end_year;
    education.diploma = req.body.diploma;
    education.description = req.body.description;
    education.link = req.body.link;
    education.save((err) => {
        if(err) res.send("can't post education: ", err);
        res.json({ message: `'${education.diploma}' diploma saved !`});
    });
}

// Update d'une formation (PUT)
function updateEducation(req, res) {
    let _id = req.params._id;
    Education.findOneAndUpdate({_id: _id}, req.body, {new: true}, (err, education) => {
        if(err) res.send(err);
        res.json({message: `education updated`});
    });
}

// suppression d'une formation (DELETE)
function deleteEducation(req, res) {
    let _id = req.params._id;
    Education.findOneAndRemove({_id: _id}, (err, education) => {
        if(err) res.send(err);
        res.json({message: `education  deleted`});
    });
}

module.exports = { getEducations, getEducation, postEducation, updateEducation, deleteEducation };
