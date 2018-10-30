var mongoose = require('mongoose');


var Sesion_de_estudioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fecha_creacion:{type: Date   
    },
    grupos:{type: Array        
    },
    estado:{type: String
    },
    documentos:{type: Array        
    },
    disciplina_estudio:{type: String
    },
    horarios:{type: Array
    },
    tipo:{type: String
    }
});


var sesion_de_estudio = mongoose.model('sesion_de_estudio',Sesion_de_estudioSchema);

module.exports = sesion_de_estudio;