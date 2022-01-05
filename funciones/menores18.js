const getUsers = require('./read');
const writeList = require('./write');

const menores18 = () => {
    let users = getUsers();
    let menores = [];
    let usersCambiado = users.map(user => {
        if(user.age < 18){
            user.userActive = false;
            menores.push(user);
        }
        return user;
    })
    writeList(usersCambiado);
    console.log('Menores de 18 desactivados.')
    return menores;
}

module.exports = menores18;