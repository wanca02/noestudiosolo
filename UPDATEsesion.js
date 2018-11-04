var mongoose = require('mongoose');

var sesion = require('./schemas/sesion');

mongoose.connect('mongodb://localhost/1', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   

   sesion.update(
    { _id: "5bdeff30dba41705ec8c3879" },
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
});