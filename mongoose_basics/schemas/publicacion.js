var mongoose = require('mongoose');


var PublicacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mensaje:{type: String   
    },
    titulo:{type: String        
    },
    para:{type: [String]
    },
    fecha_creacion:{type: Date ,
          default: Date.now       
    },
    tipo:{type: String        
    },
    estado:{type: String        
    }
});


var publicacion = mongoose.model('publicacion',PublicacionSchema);

module.exports = publicacion;