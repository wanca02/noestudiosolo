var mongoose = require('mongoose');

var usuario = require('./schemas/usuario');
var grupos = require('./schemas/Grupo');
var tecnica = require('./schemas/tecnica');
var sesion = require('./schemas/sesion');
var publicacion = require('./schemas/publicacion')
mongoose.connect('mongodb://localhost/2', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');

//USUARIO

// Todos los usuarios
    usuario.find({
    }).exec(function(err, datos) {
    if (err) throw err;
 
   // console.log(datos);

    }); 
/* usuario especifico    
     usuario.findOne({
        "Datos_cuenta.usuario": "mpedemonte"
        }).exec(function(err, datos) {
        if (err) throw err;
     
        console.log(datos);    
    });
    */ 
// dato especifico de un usuario   
   usuario.findOne({
        "Datos_cuenta.usuario": "mpedemonte"
    }).exec(function(err, datos) {
        if (err) throw err;
         
     //   console.log(datos.grupos);
    
    });

// Grupos

        grupos.find({
        }).exec(function(err, datos) {
        if (err) throw err;
            console.log(datos);
    });

    grupos.findOne({
    }).exec(function(err, datos) {
        if (err) throw err;
         
        console.log(datos.participantes);


    });
});