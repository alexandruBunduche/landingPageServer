var multer = require('multer');
var bodyParser = require('body-parser')
var upload;
var multerOptions = { limits: {}, storage: {} };
var fields = [];

multerOptions.limits.fieldNameSize = '100'; //100 bytes
multerOptions.limits.fieldSize = '1MB';
multerOptions.limits.fileSize = '1MB';
multerOptions.storage = multer.memoryStorage();// using memory storage, the file will contain a field called buffer that contains the entire file.

upload = multer(multerOptions);
fields[0] = { name: 'curriculumVitae' };

module.exports.multipartBodyParser = upload.fields(fields);
module.exports.JSONBodyParser = bodyParser.json();