const express = require('express');

const productosRouter = express.Router();

const Contenedor = require('../../contenedor');
const isAdmin = require( '../../middlewares/isAdmin' );
const { getAllProducts, createProducts, getByIdProducts, updateProducts, deleteProducts } = require( '../models/product' );
const productosContenedor = new Contenedor('./data/productos.json');

productosRouter.get('/', async (req, res) =>{
    const listaDeProductos = await getAllProducts();
    res.send({listaDeProductos})
})

productosRouter.get('/:id', async (req, res) =>{
    const idProducto = Number(req.params.id)
    const productoSeleccionado = await getByIdProducts(idProducto)
    res.send({productoSeleccionado})
})

productosRouter.post('/', isAdmin, async (req, res) =>{
    const newProducto = req.body; 
    const idProductosSaved = await createProducts(newProducto);
    res.send({
        message : 'Se registró con éxito el producto',
        data: { idProductosSaved }})
})

productosRouter.put('/:id', isAdmin, async (req, res) =>{
    const datosNuevos = req.body;
    const idProducto = Number(req.params.id);
    const productoUpdate = await updateProducts(idProducto,datosNuevos);
    res.send({productoUpdate})
})

productosRouter.delete('/:id', isAdmin, async (req, res) =>{
    idProducto = Number(req.params.id)
    const productoAEliminiar = await deleteProducts(idProducto)
    res.send({productoAEliminiar})
})

module.exports = productosRouter;