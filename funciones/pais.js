const getUsers = require('./read');

const usuariosPais = (pais) => {
    switch(pais.toLowerCase()){
        case 'argentina':
            console.log('¡Qué quilombo!');
            break;
        case 'chile':
            console.log('Al tiro.');
            break;
        case 'uruguay':
            console.log('Los de afuera son de palo.');
            break;
        default:
            console.log('Los paises deben ser Argentina, Chile o Uruguay.');
            return;
    }
    let users = getUsers();
    let usersPais = users.filter(user => user.country.toLowerCase() == pais.toLowerCase());
    return usersPais;
}

module.exports = usuariosPais;