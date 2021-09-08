'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port=3000;


mongoose.set('useFindAndModify',false); //Estos desactivan los metodos
mongoose.Promise = global.Promise; //Para que pueda tener una mejor conexion a traves de promesas

mongoose.connect('mongodb://localhost:27017/api_rest_blog',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión a la base de datos exitosamente');

        app.listen(port, ()=>{
            console.log('Servidor corriendo en mi http://localhost:'+port);
        });

    })
    .catch(()=>{

    });

