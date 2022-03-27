//5 - Manejo de Eventos
//Nos permiten accionar ciertos codigos cuando llamamos eventos cuando estos son llamados
//Son configurables y se pueden centralizar para manejarlos de mejor forma

/*
const event = require('events'); //Creamos una constante
const emitter = new event.EventEmitter(); 

//Creamos un nuevo evento
//utilizamos on para inicializar un evento

emitter.on('eventoCustom', (mensaje, status) => {
    console.log(`${status}: ${mensaje}`);
});

emitter.emit('eventoCustom', 'Mensaje cargado con exito', 200);
*/

//Otro ejemplo para hacerlo de mejor manera:

const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre) {
    this.nombre = nombre;
}

util.inherits(Persona, eventEmitter);

let persona = new Persona('Bob');

//console.log(`Me llamo ${persona.nombre}`);

persona.on('hablar', (mensaje) => {
    console.log(`${persona.nombre}: ${mensaje}`);
});

persona.emit('hablar', 'Hoy es un dia hermoso');