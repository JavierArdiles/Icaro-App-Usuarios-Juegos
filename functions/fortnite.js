const read = require('./read');

const fortnite = () => {
    let lista = read();
    let listaDeUsernames = [];
    for(let i = 0; i < lista.length; i++ ) {
        if( lista[i].email.includes('gmail') && lista[i].games.includes('Fortnite') ) {
            listaDeUsernames.push(lista[i].username);
        }
    }
    return listaDeUsernames;
}

module.exports = fortnite;