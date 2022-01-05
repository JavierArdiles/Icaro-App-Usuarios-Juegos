const getUsers = require('./read');
const writeList = require('./write');

const editUser = (usernameOrEmail, name, lastname, age, country, email, username, userActive, games) => {
    let users = getUsers();
    let userFound = users.find(user => user.username == usernameOrEmail || user.email == usernameOrEmail);
    if (!userFound) {
        console.log('El usuario buscado no existe.');
    } else {
        let usersEdited = users.map(user => {
            if (user.username == usernameOrEmail || user.email == usernameOrEmail) {
                user.name = name ? name : user.name;
                user.lastname = lastname ? lastname : user.lastname;
                user.age = age ? age : user.age;
                user.country = country ? country : user.country;
                user.email = email ? email : user.email;
                user.username = username ? username : user.username;
                user.userActive = user.userActive == userActive ? user.userActive : userActive;
                user.games = games ? games : user.games;
            }
            return user;
        });
        writeList(usersEdited);
        console.log('Usuario actualizado con éxito!');
    }
}

module.exports = editUser;