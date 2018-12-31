//requerimos el modelo de datos para poder hacer la consulta
const empleado = require('../models/empleados');

//hacemos una variable constante del controlador
const controladorEmpleado = {};

//metodo para que nos devuelva todos los empleados
controladorEmpleado.getEmpleados = async (req, res) => {

    const empleados = await empleado.find(); //guardamos lo que nos trae de la base de datos en una constante y le ponemos await por que esto tardara un poco
    res.json(empleados); //le enviamos como respuesta al navegador mediante json los empleados
};

//metodo para crear un empleado
controladorEmpleado.crearEmpleados = async (req, res) => {

    const empleados = new empleado({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }); //crea un nuevo empleado con lo que esta recogiendo de json
    await empleados.save(); //los guardamos el empleado creado antes en la base de datos en la base de datos
    res.json({ //la respuesta que nos data

        'status': 'Empleados guardado'
    });

};

//metodo para que nos devuelva un empleado concreto
controladorEmpleado.getEmpleado = async (req, res) => {

    const empleadosid = await empleado.findById(req.params.id); //buscamos el empleado con el id concreto
    res.json({ //respuesta del servidor

        empleadosid
    });

};

//metodo para que nos actualice un empleado concreto
controladorEmpleado.editarEmpleado = async (req, res) => {

    const { id } = req.params; //me traigo el id de la url

    //creo un objeto de empleados con lo que recoge
    const empleadosactu = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };

    await empleado.findOneAndUpdate(id, {$set: empleadosactu}, {new: true}); //utilizamos el metodo para encontrar un usuario y editarlo

    res.json({ //respuesta del servidor

        status: 'Empleado actualizado'
    });
};

//metodo para que nos borre un empleado concreto
controladorEmpleado.BorrarEmpleado = async (req, res) => {

    await empleado.findOneAndDelete(req.params.id); //metodo para borrar el empleado

    res.json({ //respuesta del servidor

        status: 'Empleado eliminado'
    });
};

//exportamos el controlador ya que lo vamos a utilizar en otros ficheros 
module.exports = controladorEmpleado;