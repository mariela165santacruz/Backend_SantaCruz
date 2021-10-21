const express = require('express');
const server = express();
const productosRouter = requiere  ('./router/productos');

const PORT = 8080;

server.use(express.json());
server.use(express.urlencoded({extend: true}));

server.use('/api/', express.static('public'));

server.use('/api/',express.static('public'));

server.get('/', (req, res) =>{
    res.send({message : 'El Servidor Funciona de Forma Correcta'});
})

server.use('/api/productos', productosRouter);

server.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));

server.on('error', error => console.log('Error en servidor: ', error));