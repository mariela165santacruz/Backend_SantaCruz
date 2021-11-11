const express = require('express');

const carritoRouter = express.Router();

const Contenedor = require('../../contenedor');
const { createCart, deleteCart, getByIdCart, addProductsToCart, deleteProductToCart } = require( '../models/cart' );
const productosContenedor = new Contenedor('./data/productos.json');


carritoRouter.post('/', async (req, res) =>{
    let cart = req.body;
    const idCartSaved = await createCart(cart);
    res.send(`Se registró con éxito el carrito bajo el Id: ${idCartSaved}`)
    })

    
carritoRouter.delete('/:id', async (req, res) =>{
    idCarrito = Number(req.params.id)

    const carritoAEliminiar = await deleteCart(idCarrito)
    res.send({carritoAEliminiar})
})

carritoRouter.get('/:id/productos', async (req, res) =>{
    const idCarrito = Number(req.params.id)

    const carritoSeleccionado = await getByIdCart(idCarrito)
    res.send({carritoSeleccionado})
}) 

carritoRouter.post('/:id/productos', async (req, res) =>{
    const idCarrito = Number(req.params.id)
    const cartNew  = req.body

    const carritoUpdated = await addProductsToCart(idCarrito, cartNew)
    res.send({carritoUpdated})
}) 

carritoRouter.delete('/:id/productos/:id_prod', async (req, res) =>{
    idCarrito = Number(req.params.id);
    idProducto = Number(req.params.id_prod)

    const productoAEliminiarPorCarrito = await deleteProductToCart(idCarrito,idProducto)
    res.send({productoAEliminiarPorCarrito})
})

module.exports = carritoRouter;