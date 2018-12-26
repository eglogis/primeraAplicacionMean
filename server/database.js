//requerimos el modulo de mongoose
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

//enlace de mi base de datos mongodb
const URI = 'mongodb://localhost/mean-crud';

//creamos la coneccion con la base de datos con la ruta antes definida
mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('base de datos conectada')) //si se conecta nos muestra un mensaje
    .catch(err => console.error(err)); //si no se conecta nos muestra otro mensaje

//devuelve la conexion de mongodb
module.exports = mongoose;