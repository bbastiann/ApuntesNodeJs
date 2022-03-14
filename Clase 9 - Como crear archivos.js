//Clase 9 - Como crear archivos

const fs = require('fs');

const archivo = 'prueba.txt'

//validar si existe el archivo
//FORMA NUMERO 1:

/*
if (fs.existsSync(archivo)) {
    console.log("El archivo Existe");

} else {
    console.log("El archivo no existe")
}*/

//FORMA NUMERO 2:
fs.access(archivo, fs.constants.F_OK, (err) => {
        if (err) {
            console.log("El archivo NO existe");

        } else {
            console.log("El archivo SI existe")
        }
    })
    //fs.constants.F_OK Nos sirve para saber si el archivo es visibleo no (si existe o no).

//ESCRIBIR EN UN ARCHIVO:
const contenido = 'Este es el contenido de un texto\n';
//FORMA SINCRONICA:
/*
fs.writeFileSync(archivo, contenido);
console.log('se ha escrito en el archivo');
*/

//FORMA ASINCRONICA:

fs.writeFile(archivo, contenido, (err) => {
    if (err) throw ('Hubo un error al escribir en el archivo');
    console.log('Se ha escrito en el archivo');
});

//AGREGAR CONTENIDO ADICIONAL

const textoAdicional = 'Este es el texto adicional\n';
fs.appendFile(archivo, textoAdicional, (err) => {
    if (err) {
        throw ('No se pudo adjuntar mas texto');
    }
    console.log('Se ha adjuntado mas información...');
});