const skillMySqlDao = require('../dao/mySql/SkillMySqlDao');

function getSkills() {

    return skillMySqlDao.getSkills();
}

module.exports.getSkills = getSkills;