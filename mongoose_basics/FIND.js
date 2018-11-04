var mongoose = require('mongoose');

var usuario_datos = require('./schemas/usuario');
mongoose.connect('mongodb://localhost/usuario', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');

   
    usuario_datos.find({
    }).exec(function(err, datos) {
    if (err) throw err;
 
    console.log(datos);

    }); 
    
     usuario_datos.findOne({
        "Datos_cuenta.usuario": "mpedemonte"
        }).exec(function(err, datos) {
        if (err) throw err;
     
        console.log(datos);    
    }); 
   
   usuario_datos.findOne({
        "Datos_cuenta.usuario": "mpedemonte"
    }).exec(function(err, datos) {
        if (err) throw err;
         
        console.log(datos.Datos_personales.fecha_nacimiento);
    
    });
});