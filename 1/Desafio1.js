class User{
    constructor({nombre, apellido, libros, mascotas}){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas(pet = ''){
        return this.mascotas.push(pet);
    }
    
    countMascotas(){
        return this.mascotas.lenght;
    }

    addBook({title, autor}){
       let libros = [
           {
               title: 'El principito',
               autor: 'Antoine de Saint-Exupéry'
           }
       ]
       return this.libros.push({title, autor})
    }

    getBookNames(){
        return this.libros.map((x)=>{
            return x.title;
        });
    }
}


let data = {
    nombre: "Mariela",
    apellido: "Santa Cruz",
    libros: [
        { title:'Odisea', autor: 'Homero' },
        { title:'El alquimista', autor: 'Gabriel Garcia Marquez' },
        { title:'El principito', autor: 'Antoine de Saint-Exupéry' },
    ],
    mascotas:["Perro","Gato"]
}

let mariela = new User(data);