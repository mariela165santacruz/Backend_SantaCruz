const express = require('express');

const CarritoDaoArchivos = require( '../daos/carrito/CarritoDaoArchivos' );
const CarritoDaoFirestore = require( '../daos/carrito/CarritoDaoFirestore' );
const CarritoDaoMemoria = require( '../daos/carrito/CarritoDaoMemoria' );
const CarritoDaoMongo = require( '../daos/carrito/CarritoDaoMongo' );

const carritoRouter = express.Router();

const carritoDaoArchivos = new CarritoDaoArchivos();
const carritoDaoMemoria = new CarritoDaoMemoria();
const carritoDaoFirestore = new CarritoDaoFirestore();
const carritoDaoMongo = new CarritoDaoMongo();


carritoRouter.post('/', async (req, res) =>{
    let cart = req.body;
    //const idCartSaved = await carritoDaoArchivos.createCart(cart);
    //const idCartSaved = await carritoDaoMemoria.createCart(cart);
    //const idCartSaved = await carritoDaoFirestore.createCart(cart);
    //const idCartSaved = await carritoDaoMongo.createCart(cart);
    res.send(`Se registró con éxito el carrito bajo el Id: ${idCartSaved}`)
    })
    
carritoRouter.delete('/:id', async (req, res) =>{
    idCarrito = req.params.id
    //const carritoAEliminiar = await carritoDaoArchivos.deleteCart(idCarrito);
    //const carritoAEliminiar = await carritoDaoMemoria.deleteCart(idCarrito);
    //const carritoAEliminiar = await carritoDaoFirestore.deleteCart(idCarrito);
    //const carritoAEliminiar = await carritoDaoMongo.deleteCart(idCarrito);
    res.send({carritoAEliminiar})
})

carritoRouter.get('/:id/productos', async (req, res) =>{
    const idCarrito = req.params.id

    //const carritoSeleccionado = await carritoDaoArchivos.getByIdCart(idCarrito);
    //const carritoSeleccionado = await carritoDaoMemoria.getByIdCart(idCarrito);
    //const carritoSeleccionado = await carritoDaoFirestore.getByIdCart(idCarrito);
    //const carritoSeleccionado = await carritoDaoMongo.getByIdCart(idCarrito);
    res.send({carritoSeleccionado})
}) 

carritoRouter.post('/:id/productos', async (req, res) =>{
    const idCarrito = req.params.id
    const cartNew  = req.body

    //const carritoUpdated = await carritoDaoArchivos.addProductsToCart(idCarrito, cartNew);
    //const carritoUpdated = await carritoDaoMemoria.addProductsToCart(idCarrito, cartNew);
    //const carritoUpdated = await carritoDaoFirestore.addProductsToCart(idCarrito, cartNew);
    //const carritoUpdated = await carritoDaoMongo.addProductsToCart(idCarrito, cartNew);
    res.send({carritoUpdated})
}) 

carritoRouter.delete('/:id/productos/:id_prod', async (req, res) =>{
    idCarrito = req.params.id;
    idProducto = req.params.id_prod;

    //const productoAEliminiarPorCarrito = await carritoDaoArchivos.deleteProductToCart(idCarrito,idProducto);
    //const productoAEliminiarPorCarrito = await carritoDaoMemoria.deleteProductToCart(idCarrito,idProducto);
    //const productoAEliminiarPorCarrito = await carritoDaoFirestore.deleteProductToCart(idCarrito,idProducto);
    //const productoAEliminiarPorCarrito = await carritoDaoMongo.deleteProductToCart(idCarrito,idProducto);
    res.send({productoAEliminiarPorCarrito})
})

module.exports = carritoRouter;