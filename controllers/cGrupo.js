var Grupo = require('./grupo');

//GET - Return all tvshows in the DB
exports.findGrupos = function(req, res) {
	Grupo.find(function(err, grupos) {
    if(err) res.send(500, err.message);

    console.log('GET /grupo')
		res.status(200).jsonp(grupos);
	});
};