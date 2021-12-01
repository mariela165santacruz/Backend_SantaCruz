const admin = require("firebase-admin");
const options  = require('../../config')

const serviceAccount = options.firestore

class ContenedorFirestore {
    constructor(collection){
        this.collection = collection
    }
    
    async save (newProduct){
        try{
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            const db = admin.firestore();
            const base = db.collection(this.collection)
            await base.doc().set({ newProduct });
            console.log('Guardado')
        }catch(error) {
            console.error('Error: ', error)
        }
    }

    async getById(id){
        try{
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            const db = admin.firestore();
            const base = db.collection(this.collection)
            const data = await base.doc(id).get()
            return console.log(data)
        }catch (error){
            console.error('Error de lectura',error)
        }
    }
    
    async getAll(){
        try{
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            const db = admin.firestore();
            const base = db.collection(this.collection)
            const snapshot = await base.get();
            snapshot.forEach(doc => {
            return console.log({ id: doc.id, ...doc.data() })
            })
        }catch (error){
            console.error('Error de lectura',error)
        }
    }
    async deleteAll(){
        try{
            admin.initializeApp({
                
                credential: admin.credential.cert(serviceAccount)
            });
            const db = admin.firestore();
            const base = db.collection(this.collection)
            
            const snapshot = await base.get();
            const batch = db.batch();
            snapshot.docs.forEach((doc) => {
                batch.delete(doc.ref)})
                await batch.commit()
            return console.log('Deleted all')
        } catch (error){
            console.error('Error de lectura',error)
        }
}
    async deleteById(id){
        try{
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            const db = admin.firestore();
            const base = db.collection(this.collection)
            await base.doc(id).delete();
            return console.log('Deleted!')
        } catch (error){
            console.error('Error de lectura',error)
        }
    }

    async update(id,element){
        try{
            admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
            const db = admin.firestore();
            const base = db.collection(this.collection)
            await base.doc(id).update(element);
            return console.log('Updated!')
        } catch (error){
            console.error('Error de lectura',error)
        }
    }
}

module.exports = ContenedorFirestore