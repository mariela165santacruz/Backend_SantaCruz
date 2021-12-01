const express = require('express')
const { appendFile } = require( 'fs' );
const carritoRouter = require( '../src/routers/carrito' );
const productosRouter = require( '../src/routers/productos')

const server = express();

const PORT = 8080;

server.use(express.json());
server.use(express.urlencoded({extended: true}))

server.use('/api',express.static('public'))

server.use('/api/productos', productosRouter)
server.use('/api/carrito', carritoRouter)

server.use(function(req, res, next) {
    res.status(404)
    .send({error : "-2", descripcion : `ruta ${req.path} método ${req.method} no implementada`});
});

server.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));

server.on('error', error => console.log('Error en servidor: ', error))