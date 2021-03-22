// https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Pour accepter les connexions cross-domain (CORS)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
  

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/cv-angular'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/cv-angular/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);