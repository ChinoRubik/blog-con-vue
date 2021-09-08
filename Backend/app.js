'use strict'

// CARGAR MODULOS DE NODE PARA CREAR SERVIDOR
var express = require('express');
var bodyParse = require('body-parser');

// EJECUTAR EXPRESS (HTTP)
var app = express();

// CARGAR FICHEROS DE RUTA

// MIDDLEWARES
app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json()) //ME CONVIERTE MIS DATOS EN JSON


// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// AÑADIR PREFIJOS A RUTAS
var routes = require('./routes/articleRoutes');
app.use('/api',routes)
//app.use(routes)


// METODO DE PRUEBA, DONDE PRUEBO MI NUEVO SERVIDOR EN MI PUERTO 3000
// app.get('/probando',(req,res)=>{

//     var edad = req.body.edad; //AQUI ESTOY SEÑALANDO UN DATO DESDE MIS POSTMAM, EL DATO SE LO ESTOY PASANDO EN MI PESTAÑA BODY

//     return res.status(200).send(
//         {nombre : 'Hernandez Ordoñez Cristian Ramon',
//         puesto: 'Desarrollador web',
//         universidad : 'UAEM',
//         edad
//     }

//     ) //AQUI PUEDO RETORNAR COMO UN HTML CON ` ` O TAMBIEN UN JSON
// });

// EXPORTAR MODULO(FICHERO ACTUAL)
module.exports = app;