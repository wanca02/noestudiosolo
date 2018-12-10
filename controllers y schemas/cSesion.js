var Sesion_de_estudio = require('./sesion');

//GET - Return all tvshows in the DB
exports.findSesion_de_estudio = function(req, res) {
	Sesion_de_estudio.find(function(err, Sesion_de_estudio) {
    if(err) res.send(500, err.message);

    console.log('GET /sesion_de_estudio')
		res.status(200).jsonp(Sesion_de_estudio);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Sesion_de_estudio.findById(req.params._id, function(err, Sesion_de_estudio) {
    if(err) return res.send(500, err.message);

    console.log('GET /sesion_de_estudio/' + req.params._id);
		res.status(200).jsonp(Sesion_de_estudio);
	});
};

//POST - Insert a new TVShow in the DB
exports.addSesion_de_estudio = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var sesion = new Sesion_de_estudio({
		
		_id: new mongoose.Types.ObjectId(),
        Tecnica_empleada:				req.body.Tecnica_empleada,
        grupos:		 					req.body.grupos,
        estado:							req.body.estado,
        foros:							req.body.foros,
        documentos:						req.body.documentos,
        disciplina_estudio:				req.body.disciplina_estudio,
        horarios: 						req.body.horarios,
        tipo:							req.body.tipo,
        etiquetas:						req.body.etiquetas 
	});

	sesion.save(function(err, Sesion_de_estudio) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(Sesion_de_estudio);
	});
};

//PUT - Update a register already exists
exports.updateSesion_de_estudio = function(req, res) {
	Sesion_de_estudio.findById(req.params._id, function(err, Sesion_de_estudio) {

		Sesion_de_estudio.Tecnica_empleada=					req.body.Tecnica_empleada,
        Sesion_de_estudio.grupos=		 					req.body.grupos,
		Sesion_de_estudio.estado=							req.body.estado,
        Sesion_de_estudio.foros=							req.body.foros,
        Sesion_de_estudio.documentos=						req.body.documentos,
        Sesion_de_estudio.disciplina_estudio=				req.body.disciplina_estudio,
        Sesion_de_estudio.horarios= 						req.body.horarios,
        Sesion_de_estudio.tipo=								req.body.tipo,
		Sesion_de_estudio.etiquetas=						req.body.etiquetas
		
		Sesion_de_estudio.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(Sesion_de_estudio);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteSesion_de_estudio = function(req, res) {
	Sesion_de_estudio.findById(req.params._id, function(err, Sesion_de_estudio) {
		Sesion_de_estudio.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send("Borrado");
		})
	});
};
