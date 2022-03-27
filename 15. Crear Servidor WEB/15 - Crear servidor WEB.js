//15 - Crear servidor WEB
const http = require('http');

//EJEMPLO 1
/*
http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'text/plain'
    }); //El codigo 200 significa que cargo bien la pagina, y content-type es el tipo de contenido que debe devolver el servidor.
    res.end('Hola Mundo!');
}).listen(3000); //.listen(3000) es para elegir el puerto 3000

console.log('Servidor Iniciado.......');
*/

//DIFERENCIA ENTRE USAR UN SERVIDOR NODEJS A UTILIZAR OTRO COMO APACHE
//Estos 2 ultimos son servidores donde ya se maneja las solicitudes a diferencia de que con NodeJS es necesario manejar las solicitudes y las respuestas.

//EJEMPLO 2:
http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'text/html'
    }); //El codigo 200 significa que cargo bien la pagina, y content-type es el tipo de contenido que debe devolver el servidor.
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>HOLA MUNDO</h1>
        <p>Bienvenido a mi servidor</p>
    </body>
    </html>`);
}).listen(3000); //.listen(3000) es para elegir el puerto 3000

console.log('Servidor Iniciado.......');