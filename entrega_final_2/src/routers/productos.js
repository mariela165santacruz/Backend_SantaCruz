const express = require('express');
const productosRouter = express.Router();

const { ProductDao } = require('../daos'); 
const productDao = new ProductDao();


const isAdmin = require( '../../middlewares/isAdmin' );

const ProductosDaoMongo = require( '../daos/productos/ProductosDaoMongo' );
const ProductosDaoArchivos = require( '../daos/productos/ProductosDaoArchivos' );
const ProductosDaoMemoria = require( '../daos/productos/ProductosDaoMemoria' );
const ProductosDaoFirestore = require( '../daos/productos/ProductosDaoFirestore' );


const productoDaoArchivo = new ProductosDaoArchivos();
const productoDaoMongo = new ProductosDaoMongo();
const productoDaoMemoria = new ProductosDaoMemoria();
const productoDaoFirestore = new ProductosDaoFirestore();

productosRouter.get('/', async (req, res) =>{
    console.log(productDao)
    const data = await productDao.getAll();
    const data = await productoDaoArchivo.getAll();
    //const data = await productoDaoMemoria.getAll();
    //const data = await productoDaoFirestore.getAll();
    //const data = await productoDaoMongo.getAll()
    
    res.send({data})
})

productosRouter.get('/:id', async (req, res) =>{
    const idProducto = req.params.id
    const data = await productoDaoArchivo.getById(idProducto)
    //const data = await productoDaoMemoria.getById(idProducto)
    //const data = await productoDaoMongo.getById(idProducto)
    //const data = await productoDaoFirestore.getById(idProducto)
    res.send({data})
})

productosRouter.post('/', isAdmin, async (req, res) =>{
    const newProducto = req.body; 
    const idProductosSaved = await productoDaoArchivo.save(newProducto)
    //const idProductosSaved = await productoDaoMemoria.save(newProducto)
    //const idProductosSaved = await productoDaoMongo.save(newProducto)
    //const idProductosSaved = await productoDaoFirestore.save(newProducto)
    res.send({
        message : 'Se registró con éxito el producto',
        data: { idProductosSaved }})
})

productosRouter.put('/:id', isAdmin, async (req, res) =>{
    const datosNuevos = req.body;
    const idProducto = req.params.id;
    const data = await productoDaoArchivo.update(idProducto,datosNuevos)
    //const idProductosSaved = await productoDaoMemoria.update(idProducto,datosNuevos)
    //const data = await productoDaoMongo.update(idProducto,datosNuevos);
    //const data = await productoDaoFirestore.update(idProducto,datosNuevos);
    res.send({data})
})

productosRouter.delete('/:id', isAdmin, async (req, res) =>{
    idProducto = req.params.id
    const data = await productoDaoArchivo.deleteById(idProducto)
    //const data = await productoDaoMemoria.deleteById(idProducto)
    //const data = await productoDaoMongo.deleteById(idProducto)
    //const data = await productoDaoFirestore.deleteById(idProducto).send({data})
    
    res.send({data})
})

module.exports = productosRouter;