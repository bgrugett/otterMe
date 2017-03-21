// Otter Routes

// Required libraries
const routerOtter = require('express').Router();
module.exports = routerOtter;

// Required files
const Otter = require('../models/otter');
const Family = require('../models/family');
const Toy = require('../models/toy');


// Routes

routerOtter.post('/', (req, res, next) => {
  Otter.create(req.body)
    .then((createdOtter) => {
      res.status(200).send(createdOtter);
    })
    .catch(next);
});
// localhost:1337/api/otter/1?foo=bar
routerOtter.get('/:otterId', (req, res, next) => {
  console.log('this is the query param', req.query.foo);

  Otter.findById(req.params.otterId, {
    include: [Family, Toy]
  })
    .then((foundOtter) => {
      console.log(foundOtter.toys[0].name);
      res.status(200).send(foundOtter);
    });
})

routerOtter.get('/:otterId/addFamily/:familyId', (req, res, next) => {
  let otter;
  Otter.findById(req.params.otterId)
    .then((foundOtter) => {
      otter = foundOtter;
      return Family.findById(req.params.familyId);
    })
    .then((foundFamily) => {
      otter.setFamily(foundFamily);
      res.sendStatus(200);
    })
    .catch(next);
})
