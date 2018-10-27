var mongoose = require('mongoose');

var usuario_datos_cuenta = require('./Datos_cuenta');
var usuario_datos_personales = require('./Datos_personales');
var usuario_computo = require('./Computo');

mongoose.connect('mongodb://localhost/noestudiosolo', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   
   var NuevoUsuario = new usuario_datos_cuenta({
    _id: new mongoose.Types.ObjectId(),
    usuario: 'nrivas',
    clave: 'qwer1234',
    nombre: 'Nicolas Rivas',
    correo: 'nrivas2017@alu.uct.cl',
    nivel_permisos: 'usuario',
    });

    NuevoUsuario.save(function(err) {
        if (err) throw err;
     
        console.log('usuario successfully saved.');
    });
});

