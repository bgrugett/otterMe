// Toys Router

// Required libraries
const routerToy = require('express').Router();
module.exports = routerToy;

// Required files
const Toy = require('../models/toy');
const Otter = require('../models/otter');

// Routes
;

routerToy.post('/', (req, res, next) => {
  Toy.create(req.body)
    .then((createdToy) => {
      res.status(200).send(createdToy);
    })
    .catch(next);
});

routerToy.get('/:toyId', (req, res, next) => {
  Toy.findById(req.params.toyId)
    .then((foundToy) => {
      res.status(200).send(foundToy);
    })
    .catch(next);
});

routerToy.get('/:toyId/otter/:otterId', (req, res, next) => {
  let otter;
  Otter.findById(req.params.otterId)
    .then((foundOtter) => {
      otter = foundOtter;
      return Toy.findById(req.params.toyId);
    })
    .then((foundToy) => {
      return foundToy.addOtter(otter);
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(next);
});
