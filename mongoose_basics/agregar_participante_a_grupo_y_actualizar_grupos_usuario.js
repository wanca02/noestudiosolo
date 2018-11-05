var mongoose = require('mongoose');


var usuario = require('./schemas/usuario');
var grupos = require('./schemas/Grupo');
var tecnica = require('./schemas/tecnica');
var sesion = require('./schemas/sesion');
var publicacion = require('./schemas/publicacion')

mongoose.connect('mongodb://localhost/2', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   grupos.findOne({
    }).exec(function(err, datos) {
        if (err) throw err;
        usuario.findOne({
        }).exec(function(err, user) {
            if (err) throw err;
        
        
        grupos.update(
        { _id: datos.id},
        { $set:
            {
            participantes:[
                {
                    usuario: user.id,
                    rol: "estudiante",
                    progreso_tecnica: "intermedio"
                    }
                ]
            }
    })
    .then(doc => {
        console.log(doc)
      })
      .catch(err => {
        console.error(err)
           })

   usuario.update(
    { _id: user.id },
    { $set:
       {
         grupos: datos.id  
        }  
    }

    )
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
        })
     });
    });
});