var mongoose = require('mongoose');


var Datos_personalesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre:{type: String,
            required: true    
    },
    fecha_nacimiento:{type: Date        
    },
    pais:{type: String
    },
    residencia: {
        type: String
    },
    genero: {
        type: String
    },
    nivel_educativo: {
        type: String
    },
    carrera: {
        type: String
    },
    rol: {
        type: String
    },
    disciplina: {
        type: String
    }
});


var datos_personales = mongoose.model('Datos_personales',Datos_personalesSchema);

module.exports = datos_personales;