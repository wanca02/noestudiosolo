var Usuario = require('./usuario');

//GET - Return all tvshows in the DB
exports.findUsuario = function(req, res) {
	Usuario.find(function(err, usuarios) {
    if(err) res.send(500, err.message);

    console.log('GET /usuario')
		res.status(200).jsonp(usuarios);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Usuario.findById(req.params._id, function(err, usuario) {
    if(err) return res.send(500, err.message);

    console.log('GET /usuario/' + req.params._id);
		res.status(200).jsonp(usuario);
	});
};

//POST - Insert a new TVShow in the DB
exports.addUsuario = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var usuario = new Usuario({
		_id:                        		new mongoose.Types.ObjectId(),
		Datos_cuenta:                        req.body.Datos_cuenta,
		Datos_personales:					 req.body.Datos_personales,
		Computo:							 req.body.Computo,
    	Faltas_conducta:                        req.body.Faltas_conducta,
    	grupos:									req.body.grupos,
    	puntos_actividad: 						req.body.puntos_actividad,
    	valoracion_plataforma: 					req.body.valoracion_plataforma
	});

	usuario.save(function(err, usuario) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(usuario);
	});
};

//PUT - Update a register already exists
exports.updateUsuario = function(req, res) {
	Usuario.findById(req.params._id, function(err, usuario) {
		usuario.Datos_cuenta =					req.body.Datos_cuenta,
		usuario.Datos_personales=				req.body.Datos_personales,
		usuario.Computo=						req.body.Computo,
		usuario.Faltas_conducta=                        req.body.Faltas_conducta,
    	usuario.grupos=											req.body.grupos,
    	usuario.puntos_actividad= 								req.body.puntos_actividad,
		usuario.valoracion_plataforma= 							req.body.valoracion_plataforma

		usuario.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(usuario);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteUsuario = function(req, res) {
	Usuario.findById(req.params._id, function(err, usuario) {
		usuario.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).send("Borrado");
		})
	});
};