const read = require('./read');
const write = require('./write');

const eliminar = (usernameOemail) => {
    let lista = read();
    let listaFiltrada = lista.filter( (usuario) => usuario.email != usernameOemail && usuario.username != usernameOemail);
    if( lista.length != listaFiltrada.length ) {
        write(listaFiltrada);
        console.log('Usuario eliminado con exito');
    }
    else console.log('El usuario no existe');
}

module.exports = eliminar;