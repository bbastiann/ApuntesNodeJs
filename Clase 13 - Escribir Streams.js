//Clase 13 - Escribir Streams
//En vez de escribir toda la informacion de una podemos ir agregando poco a poco la informacion;
const fs = require('fs');
const readline = require('readline'); //Readline se utiliza para crear una interfaz.
let i = readline.createInterface(process.stdin, process.stdout);

i.question('Cual es tu nombre? > ', (nombre) => {

    //fs.writeFileSync(`./${nombre}.txt `, `Esto dijo, ${nombre} \n`);
    let stream = fs.createWriteStream(`./${nombre}.txt`);
    stream.write(`Esto dijo ${nombre} \n`);

    process.stdout.write('Que quieres decir? \n');

    i.on('line', (dicho) => {
        if (dicho.trim() == 'salir') {
            stream.close();
            i.close();
        } else {
            //fs.appendFileSync(`./${nombre}.txt`, dicho.trim() + '\n');
            stream.write(dicho.trim() + 'n');
        }
    });
});