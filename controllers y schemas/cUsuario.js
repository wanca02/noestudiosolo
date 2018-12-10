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
      res.status(200).send("borrado");
		})
	});
};




/*Datos_cuenta:{	usuario: 			req.body.Datos_cuenta.usuario,
                  	  	clave: 				req.body.Datos_cuenta.clave,
                  		nombre: 			req.body.Datos_cuenta.nombre,
                  		correo: 			req.body.Datos_cuenta.correo,
                  		nivel_permisos: 	req.body.Datos_cuenta.nivel_permisos,
                  		estado_cuenta: 		req.body.Datos_cuenta.estado_cuenta
                },
    Datos_personales:{	nombre: 			req.body.Datos_personales.nombre,
                      	fecha_nacimiento: 	req.body.Datos_personales.fecha_nacimiento,
                      	pais:				req.body.Datos_personales.pais,
                      	residencia:			req.body.Datos_personales.residencia,
                      	genero: 			req.body.Datos_personales.genero,
                      	nivel_educativo:	req.body.Datos_personales.nivel_educativo,
                      	carrera:			req.body.Datos_personales.carrera,
                      	rol: 				req.body.Datos_personales.rol,
                      	disciplina:			req.body.Datos_personales.disciplina
                    },
    Computo:{	nsesiones_terminadas: 		req.body.Computo.nsesiones_terminadas,
             	nactividades_terminadas: 	req.body.Computo.nactividades_terminadas,
             	nsesiones_no_terminadas: 	req.body.Computo.nsesiones_no_terminadas,
             	nactividades_no_terminadas:	req.body.Computo.nactividades_no_terminadas
            },*/



/*usuario.Datos_cuenta.usuario =					req.body.Datos_cuenta.usuario,
	  	usuario.Datos_cuenta.clave = 					req.body.Datos_cuenta.clave,
		usuario.Datos_cuenta.nombre= 					req.body.Datos_cuenta.nombre,
		usuario.Datos_cuenta.correo= 					req.body.Datos_cuenta.correo,
		usuario.Datos_cuenta.nivel_permisos= 			req.body.Datos_cuenta.nivel_permisos,
		usuario.Datos_cuenta.estado_cuenta= 			req.body.Datos_cuenta.estado_cuenta,

	    usuario.Datos_personales.nombre= 				req.body.Datos_personales.nombre,
		usuario.Datos_personales.fecha_nacimiento= 		req.body.Datos_personales.fecha_nacimiento,
		usuario.Datos_personales.pais=					req.body.Datos_personales.pais,
		usuario.Datos_personales.residencia=			req.body.Datos_personales.residencia,
		usuario.Datos_personales.genero= 				req.body.Datos_personales.genero,
		usuario.Datos_personales.nivel_educativo=		req.body.Datos_personales.nivel_educativo,
		usuario.Datos_personales.carrera=				req.body.Datos_personales.carrera,
		usuario.Datos_personales.rol= 					req.body.Datos_personales.rol,
		usuario.Datos_personales.disciplina=			req.body.Datos_personales.disciplina,

        usuario.Computo.nsesiones_terminadas= 			req.body.Computo.nsesiones_terminadas,
        usuario.Computo.nactividades_terminadas= 		req.body.Computo.nactividades_terminadas,
        usuario.Computo.nsesiones_no_terminadas= 		req.body.Computo.nsesiones_no_terminadas,
		usuario.Computo.nactividades_no_terminadas=		req.body.Computo.nactividades_no_terminadas,
*/	