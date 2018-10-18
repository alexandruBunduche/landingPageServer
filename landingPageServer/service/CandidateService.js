/**
 * http://usejsdoc.org/
 */

 const candidateDao= require('../dao/mySql/CandidateMySqlDao');

 function insertCandidate(candidtae){

     return candidateDao.insertCandidate(candidtae).then().catch(err => console.dir(err));
}

function updateCandidate(candidtae) {

    return candidateDao.updateCandidate(candidtae).then().catch(err => console.dir(err));
}

function getCandidateByEmail(email) {

    console.log('candidate service: getCandidateByEmail ', email);
    return candidateDao.getCandidateByEmail(email);
}

module.exports.insertCandidate = insertCandidate;
module.exports.updateCandidate = updateCandidate;
module.exports.getCandidateByEmail = getCandidateByEmail;