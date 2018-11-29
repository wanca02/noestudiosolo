var Grupo = require('./Grupo');

//GET - Return all tvshows in the DB
exports.findGrupos = function(req, res) {
	Grupo.find(function(err, grupo) {
    if(err) res.send(500, err.message);

    console.log('GET /grupo')
		res.status(200).jsonp(grupo);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Grupo.findById(req.params._id, function(err, grupo) {
    if(err) return res.send(500, err.message);

    console.log('GET /grupo/' + req.params._id);
		res.status(200).jsonp(grupo);
	});
};

//POST - Insert a new TVShow in the DB
exports.addGrupo = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var grupo = new Grupo({

        _id: new mongoose.Types.ObjectId(),
        participantes:			req.body.participantes,
        sesion:					req.body.sesion,
        rol:					req.body.rol,
        tipo:					req.body.tipo,
        privado:				req.body.privado
	});

	grupo.save(function(err, grupo) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(grupo);
	});
};

//PUT - Update a register already exists
exports.updateGrupo = function(req, res) {
	Grupo.findById(req.params._id, function(err, grupo) {

		grupo.participantes=		req.body.participantes,
        grupo.sesion=				req.body.sesion,
        grupo.rol=					req.body.rol,
        grupo.tipo=					req.body.tipo,
		grupo.privado=				req.body.privado
		
		grupo.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(grupo);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteGrupo = function(req, res) {
	Grupo.findById(req.params._id, function(err, grupo) {
		grupo.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
