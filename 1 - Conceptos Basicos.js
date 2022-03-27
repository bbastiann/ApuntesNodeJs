//Curso de Nodejs  03-03-2022
//1 - Conceptos basicos 
//elementos basicos de javascript

//con var se declaran variables
const { Console } = require("console");
var path = require("path"); //variable que requiere el modulto Path (Este modulo controla toda la parte de direcciones)
const { basename } = require("path/posix");
var a = 5;
var b = 10;
console.log("hola");
console.log("El resultado es " + (a + b));

//otra forma de imprimir (que la utilzaremos mas seguido)
console.log(`El resultado es ${a+b}`);
console.log(`El resultado es True/False: ${a==b}`);

console.log(__dirname); //se utiliza para conocer la direccion
console.log(__filename); //se utiliza para conocer la direccion del archivo (incluye el nombre del archivo)

console.log(path.basename(__filename)); //retorna el nombre dle archivo