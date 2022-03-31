//23 - Ruteo en EXPRESS

const express = require('express');
var app = express();
var port = 3000;


//Parte de Ruteo
app.get('/', (req, res) => {

    res.send('Hola a Todos');

});

app.get('/home', (req, res) => {

    res.send('ESTAS EN LA PAGINA DE INICIO');

});
//
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});

console.log('Express iniciando....');

//Todo es mas sencillo si lo comparas al utilizar el modulo de HTTP