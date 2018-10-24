var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Gato = mongoose.model('Gato', { nombre: String });

var cuchito = new Gato({ name: 'cuchito' });

cuchito.save().then(() => console.log('miau'));