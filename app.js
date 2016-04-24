'use strict';

var express = require('express');

//app
var app = module.exports = express();
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/angular-common', express.static(__dirname + '/../angular-common'));
app.use('/', express.static(__dirname + '/src'));

var serverApp = app.listen(3000, function () {
    console.log('App listening at http://%s:%s', serverApp.address().address, serverApp.address().port);
});

require('./server/index')(app);
require('./server/debug')(app);

//dist
var dist = module.exports = express();
dist.use('/', express.static(__dirname + '/dist'));

var serverDist = dist.listen(4000, function () {
    console.log('Dist listening at http://%s:%s', serverDist.address().address, serverDist.address().port);
});

require('./server/index')(dist);
require('./server/debug')(dist);
