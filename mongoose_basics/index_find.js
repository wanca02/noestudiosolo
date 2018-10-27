var mongoose = require('mongoose');

var usuario_datos_cuenta = require('./datos_cuenta');
mongoose.connect('mongodb://localhost/noestudiosolo', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');

   
   usuario_datos_cuenta.find({
    correo: "mpedemonte2017@alu.uct.cl"
    }).exec(function(err, datos) {
    if (err) throw err;
 
    console.log(datos);

    }); 
    
   usuario_datos_cuenta.findOne({
     usuario: "maps",correo: "mpedemonte2017@alu.uct.cl"
        }).exec(function(err, datos) {
        if (err) throw err;
     
        console.log(datos);
        console.log(datos.correo)    
    }); 
   
   usuario_datos_cuenta.findOne({
        usuario: "mpedemonte"
    }).exec(function(err, datos) {
        if (err) throw err;
         
        console.log(datos.clave);
    
    });
});