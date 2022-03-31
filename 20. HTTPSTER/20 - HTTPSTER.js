//20 - HTTPSTER
/*
Nos permite crear un servidor en base a NodeJS, pero sin tener que configurar cada una de las extensiones para poder despachar archivos (No es necesario hacerlo individualmente).

Para instalarlo escribimos en consola el siguiente mensaje:
npm -g install httpster

entre las formas que podemos utilizar para correr httpster se encuentra escribiendo en el directorio donde nos encontramos:

httpster

o de la siguiente forma:
Ejemplo:
"httpster -p 8080 -d /home/somedir/public_html"

-p: puerto
-d: directorio

Con esto deberia inicializarse el servidor web.

Es un modulo muy util para poder hacer servidores web portables donde se despache contenido estatico.
No podemos configurar codigo de NodeJS o de PHP, solo sirve para montar contenido HTML
Esto nos sirve para poder realizar pruebas
*/