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

app.get('/', (req, res) => getIndexPage(req, res))

app.get('/runtime.js', (req, res) => getRuntime(req, res))
app.get('/polyfills.js', (req, res) => getPolifills(req, res))
app.get('/main.js', (req, res) => getMain(req, res))
app.get('/styles.js', (req, res) => getStyles(req, res))
app.get('/vendor.js', (req, res) => getVendor(req, res))
app.get('/favicon.ico', (req, res) => getFavicon(req, res))
app.get('/open-sans-v15-latin-regular.woff2', (req, res) => getOpenSansV15LatinRegular2(req, res))
app.get('/primeicons.ttf', (req, res) => getPrimeiconsTtf(req, res))
app.get('/open-sans-v15-latin-regular.woff', (req, res) => getOpenSansV15LatinRegular(req, res))
app.get('/primeicons.woff', (req, res) => getPrimeicons(req, res))
app.get('/open-sans-v15-latin-regular.ttf', (req, res) => getOpenSansV15LatinRegularTtf(req, res))

app.listen(port);

function getQualificationTypes(req, res){

  console.log('qualification request');
  qualificationService.getQualifications().then( qualifications => {
    res.json(qualifications);
  });

}

function postCandidate(req, res){

  console.log("postCandidate ",req.body);

    candidateModel.create(req.body)
    .then(()=> res.status(200).send('ok'))
    .catch(err=>   res.status(500).send('error'))
    
}

function getIndexPage(req, res){
  res.sendfile('./public/index.html');
}


function getRuntime(req, res){
  res.sendfile('./public/runtime.js');
}


function getPolifills(req, res){
  res.sendfile('./public/polyfills.js');
}


function getMain(req, res){
  res.sendfile('./public/main.js');
}

function getStyles(req, res){
  res.sendfile('./public/styles.js');
}

function getVendor(req, res){
  res.sendfile('./public/vendor.js');
}



function getFavicon(req, res){
  res.sendfile('./public/favicon.ico');
}

function getOpenSansV15LatinRegular2(req, res){
  res.sendfile('./public/open-sans-v15-latin-regular.woff2');
}

function getPrimeiconsTtf(req, res){
  res.sendfile('./public/primeicons.ttf');
}

function getOpenSansV15LatinRegular(req, res){
  res.sendfile('./public/open-sans-v15-latin-regular.woff');
}

function getPrimeicons(req, res){
  res.sendfile('./public/primeicons.woff');
}

function getOpenSansV15LatinRegularTtf(req, res){
  res.sendfile('./public/open-sans-v15-latin-regular.ttf');
}