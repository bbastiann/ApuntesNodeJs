//3 - input y Output
/*
console.log("Hola Mundo")
process.stdout.write("Hola mundo\n"); //La diferencia con console.log es que con process necesitamos hacer salto de linea ya que
//este no de hace automaticamente.

console.log("Ejemplo 1")
//Vamos a definir como podemos leer un dato utilizando:
var nombre;
process.stdin.on('data', function(data){
    //process.stdout.write(data.toString()); // Si dejabamos la funcion sin agregar lo de abajo el proceso nunca iba a terminar.
    nombre = data.toString().trim();// trim se utiliza para quitar los espacios y enter innesesarios.
    process.stdout.write(`Hola ${nombre}! \n`);
    process.exit();
});
*/
console.log("Ejemplo 2")

var preguntas = ['Cual es tu nombre ?', 'Cuantos años tienes ?', 'Lenguaje de programacion favorito ?']
var respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function(data) {
    respuestas.push(data.toString().trim());

    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);

    } else {
        process.exit();
    }
});

pregunta(0);