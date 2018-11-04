var mongoose = require('mongoose');

var usuario = require('./schemas/usuario');
var grupo = require('./schemas/grupo');

mongoose.connect('mongodb://localhost/1', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   

   usuario.update(
    { _id: "5bde6b641a9f331c342b0962" },
    { $set:
        {grupos:["5bde6b651a9f331c342b0966"]
    }
    }
)

   

   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })

   grupo.update(
    { _id: "5bde6b651a9f331c342b0966" },
    { $set:
        {participantes:[{
                usuario: ["5bde6b641a9f331c342b0962"],
                rol: "alumno",
                fecha_ingreso: "<2018-11-04>",
                progreso_tecnica: "principiante"
        }]
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