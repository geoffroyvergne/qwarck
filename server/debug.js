'use strict';

module.exports = function(app)
{
	app.get('/api/index', function (req, res) {
	  var result = {message:'index'}
	  res.json(result);
	});   

	app.get('/api/debug/echo', function (req, res) {
	  var result = {message:'hello'}
	  res.json(result);
	});

	app.get('/api/debug/ping', function (req, res) {
	  var result = {code: 200, message:'ok'}
	  res.json(result);
	});
}