//requerimos mongoose para hacer los esquemas de nuestra base de datos
const mongoose = require('mongoose');

//decimos que solo queremos mongoose para hacer el esquema de la base de datos
const { Schema } = mongoose;

//hacemos un objeto para modelos los esquemas de nuestra base de datos: Esto seria una tabla de empleados
const esquemaDeEmpleados = new Schema({

    name: {type: String, required: true},
    position: {type: String, required: true},
    office: {type: String, required: true},
    salary: {type: Number, required: true}
});

//creamos el modelo en mongodb con el nombre Empleado y con el esquema que hemos hecho antes
module.exports = mongoose.model('Empleado', esquemaDeEmpleados);