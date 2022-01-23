const Router = require('express')
const { fork } = require('child_process');

const DEFAULT_CANT = 100000000;

const randomsApiRouter = new Router()

randomsApiRouter.get('/api/randoms', (req, res) => {
    const { cant = DEFAULT_CANT } = req.query;
    const computo = fork('./utils/randomCounter.js')

    computo.on('message', msg => {
    if (msg == 'listo') {
        computo.send(cant);
    } else {
        res.send(msg);
    }
    });

});

module.exports = randomsApiRouter;