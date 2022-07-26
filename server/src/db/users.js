const {db, dbQuery} = require('./service');

const getUsers = () => {
    return dbQuery('SELECT * FROM users;');
};

const getUser = (username) => {
    return dbQuery("SELECT "+username+" FROM users;");
};

const createUser = (username, password, createAt, isAdmin) => {
    return dbQuery("INSERT INTO users \
    (username, password, createAt, isAdmin) \
    VALUES ("+username+", "+password+", "+createAt+", "+isAdmin+" \
    ");

};

const deleteUser = () => {
    return dbQuery("DELETE FROM users where username="+username+";");
};

module.exports = {getUsers, getUser, createUser, deleteUser};