const { Schema } = require('mongoose');

const MongoContainer = require("../../contenedores/ContenedorMongo");

class CarritoDaoMongo extends MongoContainer {
    constructor() {
    super('cart', new Schema({
        products: { type: String, required: true }
    }))
}};

module.exports = CarritoDaoMongo;