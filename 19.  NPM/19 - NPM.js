//19 - Uso de NPM 

/*
NPM nos sirve para recibir los paquetes que nos puedan estar enviando.
Es el administrador de paquetes mas utilizado por NPM

IMPORTANTE: para poder instalar un paquete vamos a escribir en consola npm install "nombre del paquete".

El que vamos a utilizar es underscore 
para este caso seria npm install underscore.

- Una vez instalado el paquete se añadiran 1 carpeta llamada node?modules y un archivo llamado package-lock.json
- package-lock.json es un archivo muy importante (es el administrador como tal de los modulos que instalemos)

La documentacion se puede encontrar en: https://underscorejs.org

*/
const _ = require('underscore');

const lista = [
    { 'id': 1, 'nombre': 'Marcos', 'edad': 27 },
    { 'id': 2, 'nombre': 'Lena', 'edad': 26 },
    { 'id': 3, 'nombre': 'Juanito', 'edad': 22 }
];

const res = _.findWhere(lista, { 'edad': 22 });

console.log(res);