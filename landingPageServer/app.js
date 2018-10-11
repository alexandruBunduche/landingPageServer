const qualificationService= require('./service/QualificationService')
const candidateService= require('./service/CandidateService')
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/qualifications', (req, res) => getQualificationTypes(req, res))
// @ts-ignore
app.post('/candidate',upload.array() , (req, res) => postCandidate(req, res))

app.listen(port);

function getQualificationTypes(req, res){

  qualificationService.getQualifications().then( qualifications => {
    res.status(200).json(qualifications);

  });
}

function postCandidate(req, res){

  console.log("postCandidate ",req.body);
  candidateService.insertCandidate(req.body);
}