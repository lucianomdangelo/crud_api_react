const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config'); 
const { getUsers } = require('./db/users');
const { json } = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));



app.get('/api/users', (req, res) => {
    getUsers().then((result, error) => {
            res.status(200).send(result);
    }).catch(error => {
        if (error){
            res.status(500).send({code: error.code});
        }
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
    console.log(`MySQL server URL: ${config.DATABASE_URL}`);

});