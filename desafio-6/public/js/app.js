const socket = io.connect();

const agregaProducto = document.getElementById('agregaProducto')
agregaProducto.addEventListener('submit', e => {
    e.preventDefault()
    const producto = {
        producto: agregaProducto[0].value,
        precio: agregaProducto[1].value,
        foto: agregaProducto[2].value
    }
    
    socket.emit('update', producto);    
    agregaProducto.reset()
})

socket.on('productos', productos => {
    
    
    makeHtmlTable(productos).then(html => {
        document.getElementById('productos').innerHTML = html
    })
});

function makeHtmlTable(productos) {
    
    return fetch('../hbs/productos.hbs')
        .then(respuesta => respuesta.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ productos })
            
            return html            
        })
}


const inputUsername = document.getElementById('inputUsername')
const inputMensaje = document.getElementById('inputMensaje')
const btnEnviar = document.getElementById('btnEnviar')

const formPublicarMensaje = document.getElementById('formPublicarMensaje')
formPublicarMensaje.addEventListener('submit', e => {
    e.preventDefault()

    const mensaje = { autor: inputUsername.value, texto: inputMensaje.value }
    socket.emit('nuevoChat', mensaje);
    formPublicarMensaje.reset()
    inputMensaje.focus()
})

socket.on('mensajes', mensajes => {
    console.log(mensajes);
    const html = makeHtmlList(mensajes)
    document.getElementById('mensajes').innerHTML = html;
})

function makeHtmlList(mensajes) {
    return mensajes.map(mensaje => {
        return (`
            <div>
                <b style="color:blue;">${mensaje.autor}</b>
                [<span style="color:brown;">${mensaje.fecha}</span>] :
                <i style="color:green;">${mensaje.texto}</i>
            </div>
        `)
    }).join(" ");
}

inputUsername.addEventListener('input', () => {
    const hayEmail = inputUsername.value.length
    const hayTexto = inputMensaje.value.length
    inputMensaje.disabled = !hayEmail
    btnEnviar.disabled = !hayEmail || !hayTexto
})

inputMensaje.addEventListener('input', () => {
    const hayTexto = inputMensaje.value.length
    btnEnviar.disabled = !hayTexto
})