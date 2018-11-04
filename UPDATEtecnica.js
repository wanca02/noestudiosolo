var mongoose = require('mongoose');

var tecnica = require('./schemas/tecnica');

mongoose.connect('mongodb://localhost/1', function (err) {
 
   if (err) throw err;
 
   console.log('Conectado!');
   

   tecnica.update(
    { _id: "5bdeff30dba41705ec8c3878" },
    { $set:
        {instrucciones:["tecnica de discucion por turnos (tipo debate)"]
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