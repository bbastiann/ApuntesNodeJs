//11 - Operaciones basicas en NodeJS

const fs = require('fs');

//RENOMBRAR SINCRONO
/*
fs.renameSync('./prueba.txt', './config.txt');
*/

//RENOMBRAR ASINCRONO
/*
fs.rename('./config.txt', './prueba.txt', (err) => {
    if (err) {
        throw (err);
    }
    console.log('El archivo fue renombrado exitosamente.....');
});
*/

// MOVER UN ARCHIVO
//Crear primero la carpeta src o dara error al ejecutar.
/*
fs.rename('./prueba.txt', './src/prueba.txt', (err) => {
    if (err) {
        throw (err);
    }
    console.log('El archivo fue MOVIDO exitosamente.....');
});
*/

//ELIMINAR ARCHIVO
/*
fs.unlinkSync('./src/prueba.txt');
console.log('El Archivo ha sido ELIMINADO');
*/