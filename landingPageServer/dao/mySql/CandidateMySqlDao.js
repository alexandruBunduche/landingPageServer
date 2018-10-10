
const sequelizeUtils = require('../../utils/db/mysql/sequelizeMySqlUtil');
const candidateModel= sequelizeUtils.candidatoModel;

 function insertCandidate(candidate){

  candidateModel.create(candidate);
}

module.exports.insertCandidate= insertCandidate;