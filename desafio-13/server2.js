const express = require('express')
const cluster = require('cluster')

const app = express()

const numCPUs = require('os').cpus().length

/* MASTER */
if(cluster.isMaster) {
    console.log(`Cantidad de procesadores: ${numCPUs}`)
    console.log(`PID MASTER ${process.pid}`)

    for(let i=0; i<numCPUs; i++) {
        cluster.fork()
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork()
    })
}

else {
    const PORT = parseInt(process.argv[2]) || 8081

    app.get('/', (req, res) => {
        res.send(`Servidor express en ${PORT} - <strong>PID ${process.pid}</strong> - ${new Date().toLocaleString()}`)
    })

    app.get('/api/randoms', (req, res) => {
        res.send(`Servidor express en ${PORT} - <strong>PID ${process.pid}</strong> - ${new Date().toLocaleString()}`)
    })

    app.get('/info', (req, res) =>{
        res.send (`
        <br>Servidor express en ${PORT}</br>
        <b>PID ${process.pid}</b>
        <p>${new Date().toLocaleString()}</p>
        Cantidad de Procesadores: ${numCPUs}
        `)
    })

    app.listen(PORT, err => {
        if(!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}`)
    })
}