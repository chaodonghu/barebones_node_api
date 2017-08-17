// Grab express module
const express = require('express');

const config = require('./config');
const apiRouter = require('./routers/api');

// Initialize express
const app = express();

app.use('/', express.static('./src/static'));

// Utilize the apiRouter middleware
app.use('/api', apiRouter);

const server = app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
