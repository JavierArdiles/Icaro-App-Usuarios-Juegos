const fs = require('fs');

const read = () => JSON.parse(fs.readFileSync('./usuariosData.json', 'utf-8'));

// function read(){
//     return fs.readFileSync('../usuariosData.json', 'utf-8');
// }

module.exports = read;