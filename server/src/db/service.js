const config = require('../../config'); 

const mysql = require('mysql');
const db = mysql.createPool({
    host: config.DATABASE_URL,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_DB,
});


const dbQuery = (query) => {
    return new Promise((resolve, reject) => {
        db.query(query, (err, res) => {
            if(err){
                reject(err);
            }
            resolve(res);
        });
    });
};

module.exports = {db, dbQuery};


