//requerimos el framework de express para crear rutas del servidor
const express = require('express');

//el metodo router nos devuelve un objeto por eso lo igualamos a una constante
const router = express.Router();

//requerimos el controlador del empleado para coger funciones de aqui
const controladorEmpleados = require('../controllers/controlador.empleado');

//cada vez que haya una peticion en la ruta raiz del servidor, habra un mensaje de respuesta de hola mundo
router.get('/', controladorEmpleados.getEmpleados);

//se ejecuta cuando se añada un empleado a la base de datos
router.post('/', controladorEmpleados.crearEmpleados);

//se ejecuta cuando queremos informacion de un empleado concreto
router.get('/:id', controladorEmpleados.getEmpleado);

//se ejecuta cuando haya que actualizar un empleado
router.put('/:id', controladorEmpleados.editarEmpleado);

//se ejecuta cunado haya que borrar un empleado
router.delete('/:id', controladorEmpleados.BorrarEmpleado);


//exportamos el obejto para poder trabajar con el 
module.exports = router;