const express = require('express');
const { Server : SocketServer } = require('socket.io');
const { Server : HttpServer} = require('http');
const { connected } = require( 'process' );
const MongoStore = require('connect-mongo')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config')


/* CARGA DE PRODUCTOS */
const Contenedor = require('./models/contenedor');
const productosContenedor = new Contenedor('/data/productos.json')

/* CARGA DE CHAT */
const Mensajes = require( './models/messages.js' );
const mensajes = new Mensajes('/data/messages.json')

const app = express();
const httpServer = new HttpServer(app);
const io = new SocketServer(httpServer);

/* CARGA DE SESION */
const session = require( 'express-session' );
const authWebRouter = require('./routers/web/auth')
const productosWebRouter = require('./routers/web/home')
const randomsApiRouter = require('./routers/web/randoms')
const infoRouter = require('./routers/web/info')


/* HABILITA EL USO DEL JSON */
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(session({
    secret: 'secreto',
    reseave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

/* CREA RELACIÓN A CARPETA 'PUBLIC' */
app.use( express.static('public') );

/* HABILITA EL USO DE EJS */
app.set('view engine', 'ejs');

app.use(authWebRouter)
app.use(productosWebRouter)
app.use(randomsApiRouter)
app.use(infoRouter)

app.use(session({
    store: MongoStore.create({ mongoUrl: config.mongoLocal.cnxStr }),
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 60000
    }
}))

app.use(passport.initialize());
app.use(passport.session());


/* CREA EL WEBSOCKET */
io.on('connection', async (socket) => {
    console.log(`Nuevo cliente conectado ${socket.id}`)

    /* CARGA DE PRODUCTOS INGRESADOS */
    socket.on('new-product', async(producto) =>{
        await productosContenedor.save(producto);
        const productos = await productosContenedor.getAll()
        io.sockets.emit('productos', productos) 
    })

    /* CARGA EL CHAT */
    const messages = await mensajes.getMessagess();
    socket.emit('messages', messages);

    socket.on('new-message', async data => {
        data.fechaHora = new Date().toLocaleString();
        await mensajes.saveMessages(data);
        const messages = await mensajes.getMessages();
        io.sockets.emit('messages', messages);
    }) 
})

/* CREA EL /FORM */
app.get('/form', async (req, res) =>{
    res.render ('../views/pages/form')
})

/* CREA EL /POST PRODUCTOS */
app.post('/productos', async (req, res) =>{
    const newProducto = req.body; 
    console.log(newProducto)
    const idProductoNuevo = await productosContenedor.save(newProducto);
    res.redirect('/list-productos');
}) 

/* CREA LISTA DE PRODUCTOS */
app.get('/list-productos', async (req, res) =>{
    const productos = await productosContenedor.getAll()
    res.render('pages/vista_producto',{
        productos : productos,
    })
})

/* REALIZA LA CONECCIÓN Y VERIFICA ERRORES */
const PORT = 8080;

mongoose.connect(config.mongoLocal.cnxStr, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if(err) {
      console.error('Erro connection mongo');
    }

const connectedServer = httpServer.listen(PORT, () => {
    console.log(`Servidor en Http con Websocket escuchando en el puerto ${connectedServer.address().port}`)
})

connectedServer.on('error', error => console.log(`Eror en el servidor ${PORT}`))})