var Foro = require('./foro');

//GET - Return all tvshows in the DB
exports.findForo = function(req, res) {
	Foro.find(function(err, foros) {
    if(err) res.send(500, err.message);

    console.log('GET /foro')
		res.status(200).jsonp(foros);
	});
};