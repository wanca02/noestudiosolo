var mongoose = require('mongoose');
 
var alumnoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    Correo: {
        type: String,
        
    },
    facebook: {
        type: String,
        validate: {
            validator: function(text) {
                return text.indexOf('https://www.facebook.com/') === 0;
            },
            message: 'Facebook must start with https://www.facebook.com/'
        }
    }
});
 
var alumno = mongoose.model('Alumno', alumnoSchema);
 
module.exports = alumno;