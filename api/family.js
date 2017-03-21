// Family Routes

// Required libraries
const routerFamily = require('express').Router();
module.exports = routerFamily;

// Require files
const Family = require('../models/family');
const Otter = require('../models/otter');

// Routes


routerFamily.post('/', (req, res, next) => {
  Family.create(req.body)
    .then((createdFamily) => {
      res.status(200).send(createdFamily);
    })
    .catch(next);
});

routerFamily.get('/:familyId', (req, res, next) => {
  Family.findById(req.params.familyId, {
    include: [Otter]
  })
    .then((foundFamily) => {
      res.send(foundFamily);
    })
    .catch(next);
})
