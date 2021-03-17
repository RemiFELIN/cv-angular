let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let experience = require('./routes/experiences');
let education = require('./routes/educations');
let user = require('./routes/users');

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
const uri = 'mongodb+srv://admin:admin@cluster0.w31xz.mongodb.net/cv?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
      console.log("URI = " + uri);
      console.log("Connecté à la base MongoDB dans le cloud !");
    },
    err => { 
      console.log('Erreur de connexion: ', err); 
    }
  );

// Pour accepter les connexions cross-domain (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

// EXPERIENCES
app.route(prefix + '/experiences')
  .get(experience.getExperiences)
  .post(experience.postExperience)
  .put(experience.updateExperience);

app.route(prefix + '/experiences/:id')
  .get(experience.getExperience)
  .delete(experience.deleteExperience); 
  
// EDUCATIONS
app.route(prefix + '/educations')
  .get(education.getEducations)
  .post(education.postEducation)
  .put(education.updateEducation);

app.route(prefix + '/educations/:id')
  .get(education.getEducation)
  .delete(education.deleteEducation); 

// USERS
app.route(prefix + '/users')
  .get(user.getUsers)
  .post(user.postUser)
  .put(user.updateUser);

app.route(prefix + '/users/:id')
  .get(user.getUser)
  .delete(user.deleteUser);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;
