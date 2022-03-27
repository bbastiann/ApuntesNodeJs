//14 - Hacer solicitudes HTTP

const http = require('http');

const option = {
    hostname: 'localhost',
    port: 80
    path: 'Ejemplo'
    method: 'GET'

};

const req = http.request(options, res => {
    console.log(`status code: ${res.statusCode}`);
    console.log('Headers: %j', res.headers);

    //Mapeamos la informacion utilizando streams para poder mostrarla por consola ---------------------
    let body = '';
    res.on('data', chunk => {
        body += data;
    })

    res.on('end', () => {
        console.log('\n\nResultados');
        console.log('Headers: %j, res.headers');

    })

});

req.on('error', err => {});
req.end();