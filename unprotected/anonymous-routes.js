var express = require('express'),
  quoter = require('../common/quoter'),
  dbAPIs = require('../common/db-apis');

var app = module.exports = express.Router();

app.get('/api/random-quote', function (req, res) {
  res.status(200).send(quoter.getRandomOne());
});

app.post('/api/unprotected/sdk', async function (req, res) {
  res.status(200).send(await dbAPIs.doit(req.body));
});