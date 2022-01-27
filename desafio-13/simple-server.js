const express = require('express')
const app = express()

const PORT = 8081

app.get('/', (req, res) => {
    res.send(`Servidor express en ${PORT} - <strong>PID ${process.pid}</strong> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
})