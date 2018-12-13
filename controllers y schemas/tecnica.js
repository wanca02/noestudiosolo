var mongoose = require('mongoose');

var TecnicaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{type: String   
    },
    descripcion:{type: String        
    },
    instrucciones:{type: String
    },
    nrecom_participantes:{type: Number        
    },
    nrecom_integrantes:{type: Number   
    },
    nrecom_grupos:{type: Number   
    },
    habilidades_desarrolladas:{type: Array   
    },
    modalidades:{type: Array   
    },
    tutor:{type: Boolean   
    },
    complejidad:{type: String   
    },
    etiquetas:[{_id: mongoose.Schema.Types.ObjectId}]
});


var Tecnica = mongoose.model('Tecnica',TecnicaSchema,"Tecnica");

module.exports = Tecnica;