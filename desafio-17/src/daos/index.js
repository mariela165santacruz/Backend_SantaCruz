require('dotenv').config()

const ProductosDaoArchivos = require('./productos/ProductosDaoArchivos');
const ProductosDaoMongo = require( './productos/ProductosDaoMongo' );
const ProductosDaoMemoria = require( './productos/ProductosDaoMemoria' );
const ProductosDaoFirestore = require( './productos/ProductosDaoFirestore' );

const daos = {}
daos['ProductDao'] = ProductosDaoMongo

if (process.env.storage === 'mongodb') {
    daos['ProductDao'] = ProductosDaoMongo;
}

if (process.env.storage === 'memory') {
    daos['ProductDao'] = ProductosDaoMemoria;
}

if (process.env.storage === 'firestore') {
    daos['ProductDao'] = ProductosDaoFirestore; 
}

if (process.env.storage === 'file') {
    daos['ProductDao'] = ProductosDaoArchivos;
}

module.exports = daos;