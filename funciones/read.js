const fs = require('fs');

const readUsers = () => JSON.parse(fs.readFileSync('./usuariosData.json', 'utf-8'));

module.exports = readUsers;