const Router = require('express')
const path = require('path')

const homeRouter = new Router;

homeRouter.get('/home', (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/home.ejs'), { nombre: req.session.nombre })
})

module.exports= homeRouter