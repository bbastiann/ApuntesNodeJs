//Clase 16 - Cargar Archivos de un sitio WEB

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    console.log(`${req.method} solicita ${req.url}`);

    if (req.url == '/') {
        fs.readFile('./Clase_16_Ejemplo/index.html', 'UTF-8', (err, html) => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(html);
        });
    } else if (req.url.match(/.css$/)) {
        const reqPath = path.join(__dirname, 'Clase_16_Ejemplo', req.url);
        const fileStream = fs.createReadStream(reqPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'text/css' });
        fileStream.pipe(res); //Pipe envia la informacion en trozos
    } else {
        res.writeHead(404, { 'content-type': 'text/pain' });
        res.end('404 ERROR');
    }

}).listen(3000);

console.log('Servidor iniciado......');

//Para las imagenes seria algo asi:
/*
else if (req.url.match(/.jpg$/)) {
        const reqPath = path.join(__dirname, 'Clase_16_Ejemplo', req.url);
        const fileStream = fs.createReadStream(reqPath, 'UTF-8');
        res.writeHead(200, { 'Content-Type': 'image/jpg' });
        fileStream.pipe(res); //Pipe envia la informacion en trozos
*/