const errors = require('../../errors/errors');
const mysqlUtils = require('../../utils/db/mysql/sequelizeMySqlUtil');
const candidateModel = mysqlUtils.candidatoModel;
const candidateSkill = mysqlUtils.candidateSkill;
const candidateService = require('../../service/CandidateService');
const mailService = require('../../service/MailService');

postCandidate = function (req, res) {

    var candidate = JSON.parse(req.body.candidate);

    console.log(candidate);

    candidate.lastRegisterAttempt = new Date(Date.now()).toLocaleDateString();
    candidate.curriculumVitae = req.files.curriculumVitae[0].buffer;

    candidateModel.create(candidate)
        .then((can) => handlePostSuccess(can, candidate.Competenze)).then(() => handleSkillsPostSuccess(res, req))
        .catch(err => handlePostErrors(err, res, req));
}

 


function handlePostErrors(err, res, req) {

    if (err.errors != undefined)
        err.errors.forEach(error => {

            console.log(error);

            if (error.message == 'Email must be unique') {

                res.status(506).send(errors.emailAlreadyPresent);

                candidateService.getCandidateByEmail(req.body.Email).then(candidate => {

                    candidate = candidate[0].dataValues;
                    candidate.lastRegisterAttempt = new Date(Date.now()).toLocaleDateString();
                    candidateService.updateCandidate(candidate);
                });
            }
            else {
                res.status(500).send(err);
                console.log(err);
            }
                
        });
}



function handlePostSuccess(candidate, skills) {

    var candidateSkills = [];
    try {
        candidateSkills = skills.map(skill => { return { idCandidato: candidate.Id, IdCompetenza: skill.Id }; });
        candidateSkill.bulkCreate(candidateSkills);
    }
    catch (error) {
        console.dir(error);
        throw error;
    }

}


function handleSkillsPostSuccess(res, req) {

    console.log('succesfuly inserted');
    res.status(200).send();
    console.dir(req.body.candidate);
    mailService.sendWelcomeMail(JSON.parse(req.body.candidate).Email);
}

module.exports.postCandidate = postCandidate;