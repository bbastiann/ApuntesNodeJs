//2 - Procesos 

//process es un objeto global nos sirve para obtener info sobre el ambiente donde esta trabajando, es asincronico, las solicitudes van como una lista.
console.log(process.argv) //Son argumentos que se pueden agregar 

//ejemplo

function param(p) {
    var index = process.argv.indexOf(p); //indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado.
    console.log(index);
    return process.argv[index + 1];
}

console.log(param('--nombre'));

//ejemplo

var nombre = param('--nombre');
var edad = param('--edad');
console.log(`Tu nombre es ${nombre}, y tienes ${edad} años`);

//La diferencia entre NodeJS y JavaScript es que el primero se ejecuta a traves de un proceso en cambio JavaScript se ejecuta a traves de un sitio web
//lo cual nos permite incluir informacion tanto a nivel de proceso, de argumentos como de variables globales, parametros a traves de funciones, etc.