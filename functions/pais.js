const read = require('./read');

const pais = (country) => {
    let lista = read();
    let listaFiltrada = lista.filter( (usuario) => usuario.country == country );
    switch(country){
        case "Argentina":
            console.log('Aguante Argentina, el mate es de aca');
            break;
        case "Uruguay":
            console.log('El dulce de leche es nuestro');
            break;
        case "Chile":
            console.log('Devolve la patagonia');
            break;
        default:
            console.log('Los paises aceptados son Argentina, Uruguay o Chile');
    }
    return listaFiltrada;
}

module.exports = pais;