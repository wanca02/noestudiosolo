var mongoose = require('mongoose');


var AnuncioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mensaje:{type: String   
    },
    titulo:{type: String        
    },
    autor:{type:mongoose.Schema.Types.ObjectId,
        ref:"usuario"},
    para:{type:mongoose.Schema.Types.ObjectId,
        ref:"usuario"
    },
    fecha_creacion:{type: Date ,
          default: Date.now       
    },
    tipo:{type: String        
    },
    estado:{type: String        
    }
});


var Anuncio = mongoose.model('Anuncio',AnuncioSchema,"Anuncio");

module.exports = Anuncio;