'use strict'
const cors = require('cors');
const Routes = require('./config/routes');
const express = require('express');
const propierties = require('./config/properties');
const DB = require('./config/db');
// init DB
DB();

const helmet = require('helmet');

const app = express();
app.use(helmet());

const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

const corsOptions = {
  origin: 'http://localhost:4200',
};

//app.use(cors(corsOptions));
app.use(cors());

app.use('/api', router);

Routes(router);
router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));