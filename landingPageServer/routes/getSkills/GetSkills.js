const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const corsOptions = {};
const handler = require('./Handller');
const bodyparser = require('body-parser');


corsOptions.origin = '*';
corsOptions.optionsSuccessStatus= 200;

router.use(cors(corsOptions));
router.use(bodyparser.json());
router.get('/', handler.getSkills);

module.exports = router;