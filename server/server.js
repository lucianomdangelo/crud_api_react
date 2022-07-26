const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config'); 
const { getUsers } = require('./src/db/users');
const { json } = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());



app.get('/api/users', (req, res) => {
    getUsers().then((result, error) => {
            res.status(200).send(result);
    }).catch(error => {
        if (error){
            res.status(500).send({code: error.code});
        }
    });
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
    console.log(`MySQL server URL: ${config.DATABASE_URL}`);

});