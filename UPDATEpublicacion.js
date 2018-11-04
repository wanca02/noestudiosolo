var mongoose = require('mongoose');

var publicacion = require('./schemas/publicacion');

mongoose.connect('mongodb://localhost/1', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   

   publicacion.update(
    { _id: "" },/* id de la publicacion */
    { $set:
        /* aqui va lo que se va modificiar en un futuro, cuando exista alguna publicacion */
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