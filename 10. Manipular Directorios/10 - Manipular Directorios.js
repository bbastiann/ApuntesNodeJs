//10 - Manipular Directorios

const fs = require('fs');

//mkdir
//PRIMERA FORMA:
/*
fs.mkdirSync('img'); //Se creara la carpeta img
*/

//SEGUNDA FORMA:
/*
fs.mkdir('css', function(err) {
    if (err) {
        throw ('Error' + err);
    }

    console.log('Carpeta creada....');
})
*/

//VALIDAR SI LA CARPETA YA EXISTE:

if (fs.existsSync('css')) {
    console.log('La carpeta ya existe... ');
} else {
    fs.mkdir('css', function(err) {
        console.log('La carpeta ha sido creada...... ')
    })
}