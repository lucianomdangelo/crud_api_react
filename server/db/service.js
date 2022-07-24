const mysql = require('mysql');
const db = mysql.createPool({
    host: config.DATABASE_URL,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_DB,
});

module.exports = db;