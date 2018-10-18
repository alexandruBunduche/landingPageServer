
const sequelizeUtils = require('../../utils/db/mysql/sequelizeMySqlUtil');
const candidateModel= sequelizeUtils.candidatoModel;

 function insertCandidate(candidate){


 return candidateModel.create(candidate).then(error=> {} );
}

function getCandidateByEmail(email) {

    console.log('getCandidateByEmail ',email);

    selectOptions = {};
  //  selectOptions.atributes = ['Id','Nome', 'Cognome', 'Email', 'DataDiNascita', 'TitoloDiStudio', 'lastRegisterAttempt']; //Fields to select (defaults to all fields)
    selectOptions.where = { Email: email };// WHERE Email = email

    return candidateModel.findAll(selectOptions);
}

function updateCandidate(candidate) {

    updateOptions = {};
    updateOptions.fields = ['Nome', 'Cognome', 'Email', 'DataDiNascita', 'TitoloDiStudio','lastRegisterAttempt']; //Fields to update (defaults to all fields)
    updateOptions.where = { Id: candidate.Id };// WHERE ID = candidate.Id

    return candidateModel.update(candidate, updateOptions).then(error => { });
}

module.exports.insertCandidate = insertCandidate;
module.exports.getCandidateByEmail = getCandidateByEmail;
module.exports.updateCandidate = updateCandidate;