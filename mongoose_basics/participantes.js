var mongoose = require('mongoose');


var ParticipantesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario:{type: String   
    },
    rol:{type: String        
    },
    fecha_ingreso:{type: Date
    },
    progreso_tecnica:{type: String        
    }
});


var participantes = mongoose.model('participantes',ParticipantesSchema);

module.exports = participantes;