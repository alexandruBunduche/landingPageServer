
const sequelizeUtils = require('../../utils/db/mysql/sequelizeMySqlUtil');
const candidateModel= sequelizeUtils.candidatoModel;

 function insertCandidate(candidate){


 return candidateModel.create(candidate).then(error=> {} );
}

module.exports.insertCandidate= insertCandidate;