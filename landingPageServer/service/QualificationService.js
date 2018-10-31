const qualificationDao= require('../dao/mySql/QualifiactionMySqlDao');

function getQualifications(){

    return qualificationDao.getQualifications();
}

module.exports.getQualifications= getQualifications;