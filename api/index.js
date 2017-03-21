// API Router

// Required packages
const express = require('express');

// Required files
const routerOtter = require('./otter');
const routerFamily = require('./family');
const routerToy = require('./toy');

// const Family = require('../models/family');
// const Otter = require('../models/otter');
// const Toy = require('../models/toy');

// Router creation
const routerAPI = express.Router();
module.exports = routerAPI;

routerAPI.use('/otter', routerOtter);
routerAPI.use('/family', routerFamily);
routerAPI.use('/toy', routerToy);

