//requerimos el framework de express
const express = require('express');

//requerimos el modulo de morgan y lo guardamos en una constante
const morgan = require('morgan');

//express nos devuleve un objeto y lo igualamos a otra constante
const app = express();

//creamos una constante para traernos la conexion con la base de datos del fichero database
const { mongoose } = require('./database');

//CONFIGURACION DE SERVIDOR
//creamos una variable para app para que el puerto sea el puerto que me de el sistema operativo o si no me da ninguno el puerto 3000
app.set('port', process.env.PORT || 3000);



//FUNCIONES PARA PROCESAR DATOS: MIDDLEWARE
//funcion para ejercutar la funcion del modulo de morgan
app.use(morgan('dev'));

//ayuda al servidor a entender el codigo en enviado por el navegador en json
app.use(express.json());





//ROUTES: RUTAS DE NUESTRO SERVIDOR
app.use('/api/empleados',require('./routes/empleados.routes')); //la raiz ahora se accede poniendo /api/empleados para poder usar la ruta esta


//EMPEZANDO EL SERVIDOR
//puerto en el que va a escuchar nuestro servidor, saldra un mensaje con el puerto por el que escucha
app.listen(app.get('port'), () => {

    console.log('el servidor esta en el puerto ', app.get('port'));
})