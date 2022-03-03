const mongoose = require('mongoose')
const options = require('../../config');

class ContenedorMongo {
    constructor (collection, schema){
        this.collection = mongoose.model(collection,schema)
        this.init()
    }
    async init() {
        if (this.conexion){
            this.conexion = await mongoose.connect(options.mongodb.host, options.mongodb.options)
        }
    }

    async save(newProduct){
        try{
            const document = await this.collection.create(newProduct);
            console.log('save', {document});
            return document._id
            }
        catch(error) {
            console.error('Error: ', error)
        }
    }

    async getById(id){
        try{
            const documents = await this.collection.find({_id : id});
                if (documents.lenght === 0){
                    return null
                } else{
                    return documents[0]
                }
        } catch (error){
            console.error('Error de lectura',error)
        }
        
    }

    async getAll(){
        try {
            const documents = await this.collection.find({});
            return documents;
        }
        catch (error){
            console.error('Error de lectura',error)
        }
    }

    async deleteById(id){
        try{
            const response = await this.collection.deleteOne({_id : id});
            console.log('deleted!')
        } catch (error){
            console.error('Error de lectura',error)
        }
    }

    async deleteAll(){
        try {
            await this.collection.deleteMany({});
            console.log('deleted all')
        } catch (error){
            console.error('Error de lectura',error)
        }
    }

    async update(id, element){
        const {n, nModified } = await this.collection.updateOne({_id : id},{
            $set: element
        })
        if(n==0 || nModified ==0){
            console.error(`Error con el Id: ${id} no fue encontrado`);
            return null
        }
        const elementUpdate = await this.getById(id);
        return elementUpdate
}
}
module.exports = ContenedorMongo;