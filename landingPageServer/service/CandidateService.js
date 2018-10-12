/**
 * http://usejsdoc.org/
 */

 const candidateDao= require('../dao/mySql/CandidateMySqlDao');

 function insertCandidate(candidtae){

    return candidateDao.insertCandidate;
 }

 module.exports.insertCandidate= insertCandidate;