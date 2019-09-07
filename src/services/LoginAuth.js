const Database = require('../dbMock/db.json');

const isValidUser = (username, password) => {
    if(Database.users.find(user => user.username === username && user.password === password)){
        localStorage.setItem('user', username);   
        return true;
    }        
    return false;
}

const isUserLogged = () => {
    return localStorage.getItem('user') ?  true : false;
}

const resetLoggedUser = () => {
    localStorage.removeItem('user');
}

export default { isValidUser, isUserLogged, resetLoggedUser };