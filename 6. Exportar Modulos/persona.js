//Clase 6 - persona
//Modulo que vamos a exportar
const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function(nombre) {
    this.nombre = nombre;
}

util.inherits(Persona, eventEmitter);

module.exports = Persona;