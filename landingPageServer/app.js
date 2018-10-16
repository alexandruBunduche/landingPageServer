const qualificationService= require('./service/QualificationService')
const candidateService= require('./service/CandidateService')
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
      res.json(qualifications)
       .catch(err => res.status(500).send(errors.emailAlreadyPresent));
  });

}

function postCandidate(req, res){

  console.log("postCandidate ",req.body);

    candidateModel.create(req.body)
        .then(() => res.status(200).send())
        .catch(err => res.status(506).send(errors.emailAlreadyPresent))
}
