var mongoose = require('mongoose');
 

var Datos_cuentaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    usuario:{type: String,
            required: true    
    },
    clave:{type: String,
           required: true        
    },
    nombre:{type: String
    },
    correo: {
        type: String
    },
    fecha_registro: {
        type: Date,
        default: Date.now
    },
    nivel_permisos:{
        type: String
    },
    ultimo_ingreso:{
        type: Date,
        default: Date.now
    }
});


 
var datos_cuenta = mongoose.model('Datos_cuenta', Datos_cuentaSchema);

module.exports = datos_cuenta;
