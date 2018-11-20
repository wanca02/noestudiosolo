var Grupo = require('./Grupo');

//GET - Return all tvshows in the DB
exports.findGrupos = function(req, res) {
	Grupo.find(function(err, grupos) {
    if(err) res.send(500, err.message);

    console.log('GET /grupo')
		res.status(200).jsonp(grupos);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Grupo.findById(req.params._id, function(err, grupos) {
    if(err) return res.send(500, err.message);

    console.log('GET /grupo/' + req.params._id);
		res.status(200).jsonp(grupos);
	});
};

//POST - Insert a new TVShow in the DB
exports.addGrupo = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var grupo = new Grupo({
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

	grupo.save(function(err, grupos) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(grupos);
	});
};

//PUT - Update a register already exists
exports.updateGrupo = function(req, res) {
	Grupo.findById(req.params._id, function(err, grupos) {
		tvshow.title   = req.body.petId;
		tvshow.year    = req.body.year;
		tvshow.country = req.body.country;
		tvshow.poster  = req.body.poster;
		tvshow.seasons = req.body.seasons;
		tvshow.genre   = req.body.genre;
		tvshow.summary = req.body.summary;

		grupos.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(grupos);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteGrupo = function(req, res) {
	Grupo.findById(req.params._id, function(err, grupos) {
		grupos.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
