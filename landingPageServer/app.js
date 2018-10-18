const qualificationService = require('./service/QualificationService');
const candidateService = require('./service/CandidateService');
const mailService = require('./service/MailService');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
var fileSystem = require('fs');
const mysqlUtils= require('./utils/db/mysql/sequelizeMySqlUtil');
const candidateModel= mysqlUtils.candidatoModel;

const express = require('express')
const app = express()
const port = 3000;
const errors= require('./errors/errors');


const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/qualifications', (req, res) => getQualificationTypes(req, res))

app.post('/candidate', (req, res) => postCandidate(req, res))


app.listen(port);

function getQualificationTypes(req, res){

  console.log('qualification request');
  qualificationService.getQualifications().then( qualifications => {
      res.json(qualifications);
  });

}

function postCandidate(req, res){

  console.log("postCandidate ",req.body);

    req.body.lastRegisterAttempt = new Date(Date.now()).toLocaleDateString();
    candidateModel.create(req.body)
        .then(() => handlePostSuccess(res, req))
        .catch(err => handlePostErrors(err, res, req));
}

function handlePostErrors(err, res, req) {

    if (err.errors != undefined)
        err.errors.forEach(error => {

            if (error.message == 'Email must be unique') {

                res.status(506).send(errors.emailAlreadyPresent);

                candidateService.getCandidateByEmail(req.body.Email).then(candidate => {

                    console.log('selected candidate:');

                    candidate = candidate[0].dataValues;
                    candidate.lastRegisterAttempt = new Date(Date.now()).toLocaleDateString();
                    console.dir(candidate)
                    candidateService.updateCandidate(candidate);
                });
            }
        });  
}

function handlePostSuccess(res, req) {

    res.status(200).send();
    mailService.sendWelcomeMail(req.body.Email);
}