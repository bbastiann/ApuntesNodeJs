//Clase 12 - Leer Streams

const fs = require('fs');

//Leer de forma tradicional
//Requiere de mucho tiempo, por lo cual no es viable para archivos demasiado grandes.
/*
let contenido = fs.readFileSync('./logs.log');
console.log(`tamano: ${contenido.length}`);
*/

let stream = fs.createReadStream('logs.log', 'UTF-8');
let data = '';

//.once sirve para ejecutar el evento solo una vez.
stream.once('data', () => {
    console.log('Iniciando el Stream......')
})

stream.on('data', (chunk) => {
    //console.log(`${chunk.lenght} |`);
    data += chunk;

});

stream.on('end', () => {
    console.log('Fin del stream....\n');
    console.log(data.length);
})

//de este modo el archivo se va a leyendo por partes y se va mostrando en pantalla lo cual evita que hayan tiempos considerables de carga