var mongoose = require('mongoose');

var EtiquetaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{type: String   
    },
    descripcion:{type: String        
    },
    tipo:{type: String
    }
});


var Etiqueta = mongoose.model('Etiqueta',EtiquetaSchema,"Etiqueta");

module.exports = Etiqueta;