var express = require('express');
var app = express();
var router = express.Router({ caseSensitive: false });
const cors = require('cors');
const corsOptions = {};
const handler = require('./Handler');
const middlewares = require('./MiddleWares');
const bodyParser = require('body-parser');

corsOptions.origin = '*';

app.use(cors(corsOptions));
router.use(middlewares.multipartBodyParser);// for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json

router.post('/', handler.postCandidate);

module.exports = router;