//7 - Ejecutar procesos en NodeJS

//NodeJS tiene un modulo para ejecutar procesos

const exec = require('child_process').exec;


//Se usan 2 parametros uno es el proceso que queremos ejecutar en este caso ls,
//el siguiente son el callback que necesito en este caso sera un mensaje de error y lo que se mostrara en pantalla.

/*
exec('ls', (err, stdout) => {
    if (err) {
        throw err;

    }

    console.log('Comando ejecutado');
    console.log(stdout);
});
*/

//Ejemplo Practico:

const x = 10;
const y = 25;

exec('bash ejemploBash.sh ' + x + ' ' + y, (err, stdout) => {
    if (err) {
        throw err;
    }

    console.log('Comando ejecutado');
    console.log(stdout);
});