const Promise = require("bluebird");
const sequelizeUtils = require('../../utils/db/mysql/sequelizeMySqlUtil');
const qualificationModel= sequelizeUtils.qualificationModel;


 var qualifiactions=[];

 
 function getQualifications(){
   var options= {attributes: ['Id', 'Titolo']};
   var promise= qualificationModel.findAll(options);
   var retPromise = new Promise(resolve => resolve(promise.then(instances=> instancesToQualifiactions(instances))));
   
   return retPromise;
}

function instancesToQualifiactions(instances){

     qualifiactions=[];
    var counter= 0;

    instances.forEach(instance => qualifiactions[counter++]= instance.dataValues);

    return qualifiactions;
}
    
module.exports.getQualifications= getQualifications;