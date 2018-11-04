var mongoose = require('mongoose');


var PublicacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mensaje:{type: String   
    },
    titulo:{type: String        
    },
    para:{type: Array
    },
    fecha_creacion:{type: Date        
    },
    tipo:{type: String        
    },
    estado:{type: String        
    }
});


var publicacion = mongoose.model('publicacion',PublicacionSchema);

module.exports = publicacion;