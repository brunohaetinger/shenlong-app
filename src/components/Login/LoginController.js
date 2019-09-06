const Database = require('../../dbMock/db.json');

const isValidUser = (username, password) => {
    return Database.users.find(user => user.username === username && user.password === password) ? true : false;
}

export default { isValidUser };