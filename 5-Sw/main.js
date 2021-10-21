let hasta = 20000;
let response = {};

for(let i = 0; i < array.length; i++){
    let num_random = Math.floor ((Math.random() * (20 - 0) + 0));
    response[num_random] =response.hasOwnProperty(num_random) ? response[num_random] + 1 : 0;

    const element = array[i];

}

console.log("Mi respuesta", response);