const normalizeMessages = require( '../utils/normalizar' );

const Mensajes = require( '../models/messages_archivo' );
const messageContenedor = new Mensajes('/DB/messages.json');

const saveMessages = async (newMessage) => {
    const mensajeNuevo = await messageContenedor.save(newMessage)
    return mensajeNuevo
}


const getMessages = async () => {
  const mensajes = await messageContenedor.getMessagess()
  return normalizeMessages({ id: 'messages', mensajes});
    
}; 

module.exports = {
    saveMessages,
    getMessages
}