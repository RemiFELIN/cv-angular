let Education = require('../model/education');

// https://afteracademy.com/blog/mastering-mongoose-for-mongodb-and-nodejs

// Récupérer toutes les formations (GET)
function getEducations(req, res){
    Education.find((err, educations) => {
        if(err) res.send(err);
        res.send(educations);
    });
}

// Récupérer une formation par son uuid (GET)
function getEducation(req, res){
    let educationUuid = req.params.uuid;
    Education.find({uuid: educationUuid}, (err, education) =>{
        if(err) res.send(err);
        res.json(education);
    })
}

// Ajout d'une formation (POST)
function postEducation(req, res){
    let education = new Formation();
    education.id = req.body.id;
    education.uuid = req.body.uuid;
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
    Education.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, education) => {
        if(err) res.send(err);
        res.json({message: `updated`});
    });
}

// suppression d'une formation (DELETE)
function deleteEducation(req, res) {
    Education.findByIdAndRemove(req.params.id, (err, education) => {
        if(err) res.send(err);
        res.json({message: `'${education.diploma}' diploma deleted`});
    });
}

module.exports = { getEducations, getEducation, postEducation, updateEducation, deleteEducation };
