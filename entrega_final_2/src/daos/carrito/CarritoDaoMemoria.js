const ContenedorMemoria = require( '../../contenedores/ContenedorMemoria' );

class CarritoDaoMemoria extends ContenedorMemoria{
    constructor(){
        super([])
    }
    async createCart(newCart){
        newCart.productos = []
        const idCarritoSaved = await super.save(newCart);
        return idCarritoSaved
        }
    async getByIdCart(idCart){
        const carrito = await super.getById(idCart);
        if (!carrito){
            return "Error, no encontrado"
        }else{
            return carrito
    }}
    async deleteCart(idCarrito){
    const carritoAEleminiar = await super.deleteById(idCarrito)
    return  'Eliminado de Forma Correcta'
}
    async addProductsToCart(idCarrito, productosNew){
    const resultadoCart = await super.getById(idCarrito); // SELECCIONA EL CARRITO EN DONDE SE AGREGARÁN LOS PRODUCTOS

    const listadoDeIds = productosNew.productos.map((element) =>(element.id)) // CREA UN ARRAY CON LOS IDs A AGREGAR
    
    let listadoDeProductos = [] //CREA UN ARRAY VACIO PARA INGRESAR LOS DATOS DE LOS PRODUCTOS

    for (const i of listadoDeIds) { // SE AGREGA EN EL ARRAY DE listadoDeProductos, LOS DATOS DE LOS PRODUCTOS A AGREGAR POR CADA ID
        datosDelProductoAIngresar = await productoContenedor.getById(i); 
        listadoDeProductos.push(datosDelProductoAIngresar)
    }

    resultadoCart.productos.push(listadoDeProductos) // ABREGA AL CARRITO LOS PRODUCTOS
    super.update(idCarrito, resultadoCart);
    return 'Se agregó de forma correcta' 
}

    async deleteProductToCart(idCarrito, idProducto){
        const resultadoCart = await super.getById(idCarrito);
        const carritoNew = resultadoCart.productos.filter(cart => cart.id != idProducto)

        resultadoCart.productos.splice(carritoNew,1);

        const cartUpdated = await super.update(idCarrito,resultadoCart) 
        return cartUpdated
}
}

module.exports = CarritoDaoMemoria