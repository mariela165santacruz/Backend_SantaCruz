const fs = require("fs");

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }

    //** */ salvamos los productos
    async save(producto) {
        try {
            //**  CHEQUEAMOS QUE EL ID EN EL ARCHIVO
            const lista = await fs.promises.readFile(
                `./${this.archivo}`,
                "utf-8"
            );

            //** array de productos
            let productos = [];

            //**CREAMOS EL ID NUEVO */

            if (lista === "") {
                producto.id = 1;
                productos.push(producto);
            } else {
                const listaProductos = JSON.parse(lista);

                producto.id = listaProductos[listaProductos.length - 1].id + 1;
                listaProductos.push(producto);
                productos = listaProductos;
            }

            //** */ SE GUARDA EL CONTENIDO CON UN ID NUEVO
            const productosString = JSON.stringify(productos, null, 2);
            await fs.promises.writeFile(`./${this.archivo}`, productosString);

            //** */ RETORNA EL ID
            return producto.id;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async getAll() {
        try {
            // ** leemos el archivo
            const lista = await fs.promises.readFile(
                `./${this.archivo}`,
                "utf-8"
            );
            const listaProductos = JSON.parse(lista);
            //** */ RETORNAMOS EL ARRAY DE PRODUCTOS
            return listaProductos;
        } catch (error) {
            console.error("Error:", error);
        }
    }

    async getById(id) {
        try {
            // ** leemos el archivo
            const lista = await fs.promises.readFile(
                `./${this.archivo}`,
                "utf-8"
            );
            const productoId = JSON.parse(lista);

            // ** retornamos el producto por su id

            return productoId.find((producto) => producto.id == id);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    //** */ eliminamos un producto por su id
    async deleteById(id) {
        try {
            // ** leemos el archivo
            const lista = await fs.promises.readFile(
                `./${this.archivo}`,
                "utf-8"
            );
            // ** parseamos el contenido del archivo json
            const listaDeProductos = JSON.parse(lista);
            // ** localizamos el id que queremos eliminar
            const numeroId = listaDeProductos.find(
                (number) => number.id === id
            );

            const index = listaDeProductos.indexOf(numeroId);
            //** eliminamos el producto
            listaDeProductos.splice(index, 1);

            const resultado = JSON.stringify(listaDeProductos);

            await fs.promises.writeFile(`./${this.archivo}`, resultado);
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    //** */ eliminamos todos los productos del array

    async deleteAll() {
        try {
            await fs.promises.writeFile(`./${this.archivo}`, "utf-8");
        } catch (error) {
            console.error("Error:", error);
        }
    }
}

module.exports = Contenedor;