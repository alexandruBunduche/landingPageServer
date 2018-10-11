const sequelize= require('sequelize');

const dbConfig= {
    host: "127.0.0.1",
    port: 3306,
    password: "root",
    user: "root",
    dialect: 'mysql',
    dbName: 'testdb'
};

const connection= new sequelize(dbConfig.dbName, dbConfig.user, dbConfig.password, dbConfig);

const candidatoModel= connection.import('./sequelizeModels/candidato.js');
const qualificationModel= connection.import('./sequelizeModels/tipologiatitolodistudio.js');

module.exports.candidatoModel= candidatoModel;
module.exports.qualificationModel= qualificationModel;