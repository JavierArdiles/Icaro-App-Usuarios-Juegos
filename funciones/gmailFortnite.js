const getUsers = require('./read');

const gmailFortnite = () => {
    let users = getUsers();
    let usersFiltered = users.filter(user => user.email.includes('gmail') && user.games.includes('Fortnite'));
    return usersFiltered;
}

module.exports = gmailFortnite;