//4 - Como funcionan los Modulos ?

//vamos a ver como importar nuevos modulos que aparecen en la documentacion.

var path = require('path');
var util = require('util');
var v8 = require('v8'); //sirve para sacar estadisticas del sistema.

//v8 es el engine por el cual funciona NodeJS atraves de JavaScript

console.log(path.join(__dirname, 'www', 'img', 'home', 'uploadas'));
//path.join() Sirve para juntar ubicaciones

//ejemplo de salida:
//C:\Users\minin\OneDrive - UNIVERSIDAD ANDRES BELLO\Cursos\Curso_NodeJs\www\img\home\uploadas
var nombre = "Marcos"
var edad = 25;
var texto = util.format("Hola %s, tienes %d años", nombre, edad); //muy similar a imprimir en C
console.log(texto);

//Ejemplo
console.log(v8.getHeapStatistics());

//USO DEL MODULO READLINE:
//Este modulo nos permite controlar el input y el output.

var readline = require('readline');

//crearemos una interfaz para este modulo

var rl = readline.createInterface(process.stdin, process.stdout);


/*
rl.question('Cual es tu nombre?', (respuesta) => {
    console.log(`Hola, ${respuesta}!`);
    process.exit();
}); */
//La funcion question() permite solicitar un input y escribir un output.

var Persona = {
    nombre: '',
    comentarios: []
};

rl.question('Cual es tu nombre?', (respuesta) => {
    Persona.nombre = respuesta;
    rl.setPrompt('Dime un Comentario: ');
    rl.prompt();
});

//Como podria hacer lo mismo sin usar question ?
//Podria hacerlo utilizando un evento

rl.on('line', (input) => {
    //console.log('Escribiste un linea');
    if (input.trim() === 'salir') {
        var mensaje = util.format("Te llamas %s y esto me dijiste: %j ", Persona.nombre, Persona.comentarios)
        console.log(mensaje);
        process.exit();
    }
    Persona.comentarios.push(input.trim());

    rl.setPrompt('Dime un Comentario: ');
    rl.prompt();
})