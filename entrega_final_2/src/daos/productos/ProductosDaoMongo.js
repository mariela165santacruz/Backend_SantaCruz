const { Schema } = require('mongoose');

const MongoContainer = require("../../contenedores/ContenedorMongo");

class ProductosDaoMongo extends MongoContainer {
    constructor() {
    super('products', new Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        code: { type: Number, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true },
        photo: { type: String, required: true }
        }))
    }
};

module.exports = ProductosDaoMongo;