var Sesion_de_estudio = require('./sesion');

//GET - Return all tvshows in the DB
exports.findSesion_de_estudio = function(req, res) {
	Sesion_de_estudio.find(function(err, sesiones) {
    if(err) res.send(500, err.message);

    console.log('GET /sesion')
		res.status(200).jsonp(sesiones);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Sesion_de_estudio.findById(req.params._id, function(err, sesiones) {
    if(err) return res.send(500, err.message);

    console.log('GET /sesion_de_estudio/' + req.params._id);
		res.status(200).jsonp(sesiones);
	});
};

//POST - Insert a new TVShow in the DB
exports.addSesion_de_estudio = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var sesion = new Sesion_de_estudio({
		_id:                        req.body._id,
        nombre:                     req.body.nombre,
        descripcion:                req.body.descripcion,
        instrucciones:              req.body.instrucciones,
        nrecom_participantes:       req.body.nrecom_participantes,
        nrecom_integrantes:         req.body.nrecom_integrantes,
        nrecom_grupos:              req.body.nrecom_grupos,
        habilidades_desarrolladas:  req.body.habilidades_desarrolladas,
        modalidades:                req.body.modalidades,
        tutor:                      req.body.tutor,
        complejidad:                req.body.complejidad,
        etiquetas:                  req.body.etiquetas
	});

	sesion.save(function(err, sesiones) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(sesiones);
	});
};

//PUT - Update a register already exists
exports.updateSesion = function(req, res) {
	Sesion_de_estudio.findById(req.params._id, function(err, sesiones) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		sesion.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(sesiones);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTecnica = function(req, res) {
	Sesion_de_estudio.findById(req.params._id, function(err, sesiones) {
		sesiones.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
