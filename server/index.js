'use strict';

module.exports = function(app)
{
	app.get('/', function (req, res) {
	  var result = {message:'index'}
	  res.json(result);
	});   
}