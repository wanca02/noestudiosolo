var mongoose = require('mongoose');


var DocumentosSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipo:{type: String   
    },
    fecha_creacion:{type: Date        
    },
    autores:{type: Array
    }
});


var documentos = mongoose.model('documentos',DocumentosSchema);

module.exports = documentos;