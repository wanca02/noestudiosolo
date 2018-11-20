var Sesion_de_estudio = require('./sesion');

//GET - Return all tvshows in the DB
exports.findSesion_de_estudio = function(req, res) {
	Sesion_de_estudio.find(function(err, sesiones) {
    if(err) res.send(500, err.message);

    console.log('GET /sesion')
		res.status(200).jsonp(sesiones);
	});
};