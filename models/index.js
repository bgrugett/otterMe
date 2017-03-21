// Main database file

// Required files
const db = require('./_db');
const Otter = require('./otter');
const Family = require('./family');
const Toy = require('./toy');

// Relations
Otter.belongsTo(Family);
Family.hasMany(Otter);

Toy.belongsToMany(Otter, { through: 'toyOtter' });
Otter.belongsToMany(Toy, { through: 'toyOtter' });

module.exports = db;


// Family.create({surname: 'Mcotter'})
//     .then((createdFamily) => {
//       console.log('created Family');//`, createdFamily);
//       return createdFamily;
//     })
//     .then( Otter.create({name: 'otto'}))
//       .then(function(otter){
//         console.log('new otter'); //, otter);
//         return otter;
// })
// .then(Otter.create({name: 'Leslie'}))
//    .then(function(otter){
//     console.log('new otter'); //, otter);
//     return otter;
// })
// .then(Toy.create({name: 'rock'}))
//     .then((createdToy) => {
//       console.log('created new toy: '); //, createdToy);
//       return createToy;
//     })
// .then( Toy.create({name: 'ball'}))
//     .then((createdToy) => {
//       console.log('created new toy: '); //, createdToy);
//     })
//     .catch(err) =>
//       console.error('caught error', err);
//     })
