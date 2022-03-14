//Clase 8 - leer archivos

var fs = require("fs");

//Codigo funcional (Lo puedes descomentar)
/*
var files = fs.readdirSync('./');
//fs.readdirSync('./') Con esto conseguiremos todos los archivos que se encuentran presentes en la carpeta
//junto a la extension de estos.

console.log(files);

//En el terminal se deberia mostrar algo asi:
[
  'Clase 1 - Conceptos Basicos.js',
  'Clase 2 - Procesos.js',
  'Clase 3 - input y Output.js',
  'Clase 4 - Como funcionan los Modulos.js',
  'Clase 5 - Manejo de Eventos.js',
  'Clase 6 - Como Exportar Modulos.js',
  'Clase 7 - Ejecutar procesos en NodeJS.js',
  'Clase 8 - leer archivos.js',
  'Curso-de-NodeJS-master',
  'ejemploBash.sh',
  'persona.js'
]*/

//NOTA:Una de las diferencias en estas funcionalidades en filesystem es que se pueden ejecutar de forma Sincronica o asincronica.
//fs.readdir es asincrona 
fs.readdir('./', (error, files) => {

    if (error) { //Si el programa falla al leer el directorio el programa dejara de ejecutarse.
        throw error;
    }

    console.log(files);

    //var archivo = fs.readFileSync('./archivoClase8.txt', 'UTF-8')

    //ahora de la forma asincronica

    fs.readFile('./archivoClase8.txt', 'UTF-8', (error, archivo) => {

        if (error) {
            throw error;
        }
        console.log(archivo);

    });

    console.log('contenido del archivo....')

    //console.log('contenido del archivo....') deberia ejecutarse antes que console.log('contenido del archivo....')
});