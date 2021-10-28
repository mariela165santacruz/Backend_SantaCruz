const express = require('express')

const app = express()

app.set('view engine', 'ejs');

const Contenedor = require('./contenedor');
const productosContenedor = new Contenedor('/data/productos.json')

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/form', async (req, res) =>{
    res.render('pages/form',{
    })
})

app.post('/productos', async (req, res) =>{
    const newProducto = req.body; 
    console.log(newProducto)
    const idProductoNuevo = await productosContenedor.save(newProducto);
    res.redirect('/list-productos');
})


app.get('/list-productos', async (req, res) =>{
    const productos = await productosContenedor.getAll()
    res.render('pages/vista_productos',{
        productos : productos,
    })
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));