const sequelize = require('sequelize');

const dbConfig= {
    host: "192.168.7.98",
    port: 3306,
    password: "root",
    user: "root",
    dialect: 'mysql',
    dbName: 'recruiting'
};

const connection = new sequelize(dbConfig.dbName, dbConfig.user, dbConfig.password, dbConfig);

const candidateSkill = connection.import('./sequelizeModels/CandidatoCompetenza.js');
const candidatoModel= connection.import('./sequelizeModels/candidato.js');
const qualificationModel= connection.import('./sequelizeModels/tipologiatitolodistudio.js');
const skillModel = connection.import('./sequelizeModels/Competenza.js');

module.exports.candidatoModel= candidatoModel;
module.exports.qualificationModel= qualificationModel;
module.exports.skillModel = skillModel;
module.exports.candidateSkill = candidateSkill;