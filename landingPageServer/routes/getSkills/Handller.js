const skillService = require('../../service/SkillService');

getSkills= function(req, res) {

    skillService.getSkills().then(skills => {
        res.json(skills);
    });
}

module.exports.getSkills = getSkills;