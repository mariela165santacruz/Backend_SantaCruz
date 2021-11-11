const Contenedor = require('../../Contenedor');

const productosContenedor = new Contenedor('./data/productos.json');

const getAllProducts = async () =>{
    const list = await productosContenedor.getAllProducts();
    return list
}

const createProducts = async(newProducto)=>{
    const idProductosSaved = await productosContenedor.save(newProducto);

    return idProductosSaved
    }

const getByIdProducts = async (idProduct) => {
    const producto = await productosContenedor.getById(idProduct);
            if (!producto){
        return "Error, producto no encontrado"
    }else{
        return producto
}}

const updateProducts = async(idProduct,newData)=>{
    const productoUpdate = await productosContenedor.update(idProduct,newData)
        if (!productoUpdate){
        return 'Producto no encontrado'
        }else {
            return productoUpdate
    }}

const deleteProducts = async (idProducto) =>{
    const productoAEliminiar = await productosContenedor.getById(idProducto)
    if (productoAEliminiar === null ){
        return ({ error : 'Producto no Encontrado' })
    }else {
        await productosContenedor.deleteById(idProducto);
        return({ message : 'Producto Eliminado de Forma Correcta' })
    }
}

module.exports = {
    getAllProducts,
    createProducts,
    getByIdProducts,
    updateProducts,
    deleteProducts
}