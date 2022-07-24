import db from './service';

const getUsers = () => {
    return db.query('SELECT * FROM users;');
};

const getUser = (username) => {
    return db.query("SELECT "+username+" FROM users;");
};

const createUser = (username, password, createAt, isAdmin) => {
    return db.query("INSERT INTO users \
    (username, password, createAt, isAdmin) \
    VALUES ("+username+", "+password+", "+createAt+", "+isAdmin+" \
    ");

};

const deleteUser = () => {
    return db.query("DELETE FROM users where username="+username+";");
};

module.exports = { getUsers, getUser, createUser, deleteUser };