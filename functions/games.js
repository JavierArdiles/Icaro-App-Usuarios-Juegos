const read = require('./read');

const games = () => {
    let lista = read(); 
    let listaFiltrada = lista.filter( (usuario) => usuario.userActive && usuario.games.length >= 3 );
    return listaFiltrada;
}

// const games = () => read().filter((usuario) => usuario.userActive && usuario.games.length >= 3);

module.exports = games;