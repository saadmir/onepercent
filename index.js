#!/usr/bin/env node

var path = require('path');
var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var app             = express();
var port            = process.env.PORT || '3000';

app.use(bodyParser.json());

var v1 = require(path.join(__dirname, 'routes', 'v1', 'legislator.js'));
app.use('/v1',v1);

//set default version to be v1
app.use('/',v1);

require('http')
  .createServer(app)
  .listen(port, function () {
    console.log('listening on port ' + port);
  });

module.exports = app;
