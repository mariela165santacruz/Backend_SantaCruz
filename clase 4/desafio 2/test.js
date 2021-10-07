const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

console.log("contenedor");

const productoUno = {
    id: "001",
    nombre: "papas",
    precio: "100",
};

const productoDos = {
    nombre: "tomates",
    precio: "300",
};

const productoTres = {
    nombre: "cebollas",
    precio: "500",
};

const productoCuatro = {
    nombre: "pina",
    precio: "500",
};

const main = async () => {
    //** */ salvamos los productos
    // const id = await contenedor.save(productoCuatro);
    // console.log(id);

    //** */ obtenemos el producto por su id
    // const productId = await contenedor.getById(3);
    // console.log(productId);

    //** */ obtenemos un array de todos los productos guardados
    const arrayProductos = await contenedor.getAll();
    // console.log(arrayProductos);

    //** */ eliminamos un producto por su id
    await contenedor.deleteById(5);

    //** */ eliminamos todos los productos del array
    // await contenedor.deleteAll();
};

main();