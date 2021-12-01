const ContenedorFirestore = require( "../../contenedores/ContenedorFirestore" );

class ProductosDaoFirestore extends ContenedorFirestore{
    constructor(){
        super('products')
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
        const producto = await super.getById(idProduct);
                if (!producto){
            return "Error, producto no encontrado"
        }else{
            return producto
    }}

    async update(idProduct,newData) {
        const productoUpdate = await super.update(idProduct,newData)
            if (!productoUpdate){
            return 'Producto no encontrado'
            }else {
                return productoUpdate
        }}

    async deleteById(idProducto){
        const productoAEliminiar = await super.deleteById(idProducto)
        if(!productoAEliminiar){
            return 'Producto no encontrado'
        } else{
            return productoAEliminiar
        }
}}

module.exports = ProductosDaoFirestore