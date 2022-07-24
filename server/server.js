const express = require('express');
const app = express();
const { config } = require('./config'); 


const mysql = require('mysql');
const db = mysql.createPool({
    host: config.DATABASE_URL,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE_DB,
});
// const sqlInsert = "INSERT INTO users (username) VALUES ('prueba2');";
// db.query(sqlInsert, (err, res) => {
//     if (err) {
//         return console.log(err.code);
//     }
//     console.log('agregado a la db')
// })



app.listen(3001, () => {
    console.log('Server running on port 3001');
    console.log(`MySQL server URL: ${config.DATABASE_URL}`);

});