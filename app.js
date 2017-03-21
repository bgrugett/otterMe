// Main application

// Required libraries
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

// Required files
const db = require('./models');
const routerAPI = require('./api');

// App creation
const app = express();

// Middleware

//   Logging
app.use(volleyball);

//   Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routers
app.use('/api', routerAPI);

// Error logging middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).send(err.message || 'Internal server error');
});

//db.sync({force: true})
db.sync({})
  .then(function() {
    console.log('Connected to db');
    app.listen(1337, function() {
      console.log('Server is listening on port 1337');
    });
  })
    .catch(console.error);

// Start the server
// app.listen(PORT, () => {
//   console.log(`We're listening online on port ${PORT}`);
//   console.log('Connecting to the database...');
//   db.sync({force: true})
//   .then(() => {
//     console.log('Connected.');
//   });
// });
