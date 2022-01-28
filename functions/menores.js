const read = require('./read');

const menores = () => {
    let lista = read();

    let listaFinal = [];

    // for(let i = 0; i < lista.length; i++) {
    //     if( lista[i].age < 18 ){
    //         lista[i].userActive = false;
    //         listaFinal.push(lista[i]);
    //     }
    // }

    lista.map(usuario => {
        if(usuario.age < 18) {
            usuario.userActive = false;
            listaFinal.push(usuario);
        }
    })

    console.log(lista);

    return listaFinal;

}

module.exports = menores;