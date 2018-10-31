const qualificationRouter = require('./routes/getQualifiaction/GetQualification');
const bodyparser = require('body-parser');
const postCandidateRouter = require('./routes/postCandidate/PostCandidate');
const getSkillsRouter = require('./routes/getSkills/GetSkills');
const mysqlUtils = require('./utils/db/mysql/sequelizeMySqlUtil');
const candidateModel = mysqlUtils.candidatoModel;
const candidateSkill = mysqlUtils.candidateSkill;

const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors');
const corsOptions = { origin: '*', optionsSuccessStatus:200};

app.use(cors(corsOptions));
app.use(bodyparser.json());

app.use('/qualifications', qualificationRouter);
app.use('/candidate', postCandidateRouter);
app.use('/competenze', getSkillsRouter);

app.listen(port);


