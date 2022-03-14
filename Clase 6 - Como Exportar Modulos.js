//Clase 6 - Como Exportar Modulos

//Tomando como referencia la clase pasada

//En otro archivo donde tendremos este codigo: persona.js
/*
const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre) {
    this.nombre = nombre;
}

util.inherits(Persona, eventEmitter);

module.exports = Persona; //Gracias a esta linea podemos hacer que nuestro paquete sea Exportable
*/

const persona = require('./persona'); //si estuviera en una carpeta EJ: libs, el codigo seria de la siguiente manera
//const persona = require('libs/persona');

let pablo = new persona('Pablo');

pablo.on('Habla', (mensaje) => {
    console.log(`${pablo.nombre}: ${mensaje}`);
});

pablo.emit('Habla', 'Hoy va a ser un gran dia');