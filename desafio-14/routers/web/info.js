const Router = require('express')
const process = require('process');

const infoRouter = new Router;

infoRouter.get('/info', (req, res) => {
    const result = {
        'Carpeta del proyecto' : process.cwd(),
        'Process Id' : process.pid,
        'Versión de node.js' : process.version,
        'Nombre de la Plataforma (Sistema Operativo)' : process.platform,
        'Argumento de Entrada' : process.argv[0],
        'Path de Ejecución': process.Path,
        'Total de Memoria Reservda (rs)':process.memoryUsage().rs
    };
    res.send(
        result
)});

module.exports = infoRouter