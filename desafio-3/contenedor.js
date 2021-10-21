const fs = require('fs');
// import fs from 'fs';
class Contenedor {

    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
        console.log('this: ',this);
    }

    async save(objeto){

            // Recibir un objeto
            // validar el id del objeto
            // guardarlo en el archivo
            // devolver el id asignado

                try {

                    
                    if (fs.existsSync(this.nombreArchivo)) {
                        
                        const data = await fs.promises.readFile(this.nombreArchivo,'utf-8');
                        const obj = JSON.parse(data);
                        
                        
                        let productos = [];
                        let id = 0;
                        obj.map((p)=>{
                            
                            productos.push(p);
                            id = p.id;
                        });
                        
                        objeto.id = id+1;
                        productos.push(objeto);
                         
                        await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(productos,null,2));
                        console.log('id asignado: '+(id+1));
                    }else{
                        
                        objeto.id = 1;
                        let productos = [];
                        productos.push(objeto);
                        console.log('no existe el archivo');
                        await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(productos,null,2));
                        console.log('id asignado: 1');
                    }

                    
                } catch (error) {
                    console.log(error);
                }
                
            

            
    }


    async getById(id){

        try {

            const data = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            const obj = JSON.parse(data);
            
            const result = obj.filter(p => p.id == id);
            if(result.length<1){
                console.log(null);
            }else{
            console.log(result[0]);
            }
            
        } catch (error) {
            
        }

    }


    async getAll(){

        try {

            const data = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            const obj = JSON.parse(data);
            let productos = [];
            
            obj.map((p)=>{
                productos.push(p);
            });     
            
            
            return productos;
            
        } catch (error) {
            
            console.log(error);
        }
    }


    async deleteById(id) {

        try {

            const data = await fs.promises.readFile(this.nombreArchivo,'utf-8');
            const obj = JSON.parse(data);
            
            const indice = obj.findIndex((p) => p.id == id);
            
            if(indice>=0){
                obj.splice(indice,1);
                await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(obj,null,2));
                console.log('eliminado');                
            }else{
                console.log('no existe');
            }
            

        } catch (error) {

            console.log(error);
            
        }
    }


    async deleteAll(){

        try {

            let productos = [];
            await fs.promises.writeFile(this.nombreArchivo,JSON.stringify(productos,null,2));
            console.log('array vacio');            
            
        } catch (error) {
            
            console.log(error);
        }
    }
}

module.exports = Contenedor;

// export default Contenedor;