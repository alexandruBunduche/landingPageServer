const qualificationService = require('../../service/QualificationService');

getQualifications= function(req, res) {

    qualificationService.getQualifications().then(qualifications => {
        res.json(qualifications);
    });
}

module.exports.getQualifications = getQualifications;