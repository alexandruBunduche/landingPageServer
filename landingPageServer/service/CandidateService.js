/**
 * http://usejsdoc.org/
 */

 const candidateDao= require('../dao/mySql/CandidateMySqlDao');

 function insertCandidate(candidtae){

    candidateDao.insertCandidate(candidtae);
 }

 module.exports.insertCandidate= insertCandidate;