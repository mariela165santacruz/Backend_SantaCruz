const ContenedorArchivo = require('../../contenedores/ContenedorArchivo');

class ProductosDaoArchivos extends ContenedorArchivo{
    constructor(){
        super('./data/productos.json')
    }

    async getAll(){
        const list = await super.getAll();
        return list
    }

    async save(newProducto) {
        const idProductosSaved = await super.save(newProducto);

        return idProductosSaved
        }

    async getById(idProduct) {
        const idToNumber = Number(idProduct)
        const producto = await super.getById(idToNumber);
                if (!producto){
            return "Error, producto no encontrado"
        }else{
            return producto
    }}

    async update(idProduct,newData) {
        const idToNumber = Number(idProduct)
        const productoUpdate = await super.update(idToNumber,newData)
            if (!productoUpdate){
            return 'Producto no encontrado'
            }else {
                return productoUpdate
        }}

    async deleteById(idProducto){
        const idToNumber = Number(idProduct)
        const productoAEliminiar = await super.getById(idToNumber)
        if (productoAEliminiar === null ){
            return ({ error : 'Producto no Encontrado' })
        }else {
            await super.deleteById(idProducto);
            return({ message : 'Producto Eliminado de Forma Correcta' })
        }
}}

module.exports = ProductosDaoArchivos