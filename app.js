const eliminar = require('./functions/eliminar');
const fortnite = require('./functions/fortnite');
const games = require('./functions/games')
const menores = require('./functions/menores');
const pais = require('./functions/pais');

switch(process.argv[2]){
    case 'eliminar':
        eliminar(process.argv[3]);
        break;
    case 'fortnite':
        console.log(fortnite());
        break;
    case 'games':
        console.log(games());
        break;
    case 'menores':
        console.log(menores());
        break;
    case 'pais':
        console.log(pais(process.argv[3]));
        break;
    default:
        console.log('Comando no identificado');
}
