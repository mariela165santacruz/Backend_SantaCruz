class ContenedorMemoria{
    constructor(data){
        this.data = data
    }

    async save(dataNew){
        try{
            await this.data.push(dataNew)
            return console.log(this.data)
        }catch(error) {
            console.error('Error: ', error)
            }}

    async getById(number){
        try{
            const resultadoId = await this.data.find(numero => numero.id === number)
            return console.log(resultadoId)
        }catch(error) {
            console.error('Error: ', error)
            }}

    async getAll(){
        try{
            const contenido = await this.data.every()
            return console.log(contenido)
        }catch(error) {
            console.error('Error: ', error)
            }}

    async deleteById(numero){
        try{
            const resultadoId = await this.data.find(numero => numero.id === number)
            delete productoSaved[Number(resultadoId)]
        } catch(error) {
            console.error('Error: ', error)
            }}

    async deleteAll(){
        try{
            const todoEliminado = this.data = []
            return console.log('Se eliminó todo de forma correcta')
        } catch(error) {
            console.error('Error: ', error)
            }}

    async update(id, dataNew){
        try{
            const list = await this.data.getAll();
            const productoSaved = list.find((item) => item.id === parseInt(id))
            const indexProductoSaved = list.findIndex((item) => item.id === parseInt(id))
    
            if (!productoSaved){
                console.log(`Error con el Id: ${id} no fue encontrado`)
                return null
            }

            const productoUpdate = {
                ...productoSaved, 
                ...producto
            };
            list[indexProductoSaved] = productoUpdate
        } catch(error) {
            console.error('Error: ', error)
            }}
        }


module.exports = ContenedorMemoria