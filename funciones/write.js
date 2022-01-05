const fs = require('fs');

const writeList = (listaActualizaada) => {
    fs.writeFileSync('./usuariosData.json', JSON.stringify(listaActualizaada, null, 2))
}

module.exports = writeList;