//22 - Introduccion a EXPRESS

/*
Introduccion es el Framework de preferencia para NodeJS que nos permite crear aplicaciones complejas y robustas
de forma que nos permita separar nuestro codigo de manera adecuada.

MIDDLEWARE:
Son librerias o modulos de NodeJS que nos permiten simplificar las tareas al momento de desarrollar aplicaciones web

PIMEROS PASOS:

1. Instalar EXPRESS con: npm install express

Express a diferencia de HTTPSTER es que podemos desplegar servidores web tanto de manera estatica como dinamica
*/

const express = require('express');
var app = express();

app.use(express.static('./public'))
    /*Use es el metodo que va a requerir todo lo que necesitemos para llevar a cabo nuestra aplicacion. usamos static() por que queremos despachar contenido estatico
    y dentro del parentesis va la ruta */

app.listen(3000);

console.log('Express iniciando....');

//EXPRESS nos ayuda a ahorrar mucho tiempo que antes perdiamos codificando y despachando los archivos uno a uno.