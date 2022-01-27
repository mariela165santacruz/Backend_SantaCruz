const bCrypt = require('bCrypt')


param {string} password 
returns {string} 

const createHash = (password) => bCrypt.hashSync(
  password,
  bCrypt.genSaltSync(10),
  null);

module.exports= createHash;