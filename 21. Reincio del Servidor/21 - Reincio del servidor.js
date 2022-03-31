//21 - Reincio del servidor
/*
Muchas veces realizamos cambios a nuestro codigo HTML y estos no se ven reflejados de forma inmediata es por eso que necesitamos
reiniciar para que esta sea actualizada

Hay 2 modulos que son populares para el reinicio uno es node-dev y el otro es nodemon
Cualquiera de estos 2 paquetes nos va ayudar a tener un ambiente de desarrollo en el que podremos
reiniciar el servidor cada vez que este detecte que se ha realizado un cambio

Para este ejemplo usaremos node-dev
Escribimos en consola:
npm install -g node-dev
*/

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.end(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>FELICIDADES SHINJI</h1>
    <h3>Bienvenido a mi sitio</h3>
</body>
</html>
    `);
}).listen(3000);

console.log('Servidor iniciado...');

//Para ejecutar el codigo escribimos en la consolapara este ejemplo:
//node - dev '21 - Reincio del servidor.js'