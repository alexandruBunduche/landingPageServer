const Promise = require("bluebird");
const sequelizeUtils = require('../../utils/db/mysql/sequelizeMySqlUtil');
const skillModel = sequelizeUtils.skillModel;





function getSkills() {
    var options = { attributes: ['Id', 'Competenza'] };
    var promise = skillModel.findAll(options);
    var retPromise = new Promise(resolve => resolve(promise.then(instances => instancesToSkills(instances))));

    return retPromise;
}

function instancesToSkills(instances) {

    var skills = [];
    var counter = 0;

    instances.forEach(instance => skills[counter++] = instance.dataValues);

    return skills;
}

module.exports.getSkills = getSkills;