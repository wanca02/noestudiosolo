var Usuario = require('./usuario');

//GET - Return all tvshows in the DB
exports.findUsuario = function(req, res) {
	Usuario.find(function(err, usuarios) {
    if(err) res.send(500, err.message);

    console.log('GET /usuario')
		res.status(200).jsonp(usuarios);
	});
};