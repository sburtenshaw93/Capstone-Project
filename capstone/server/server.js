require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { SERVER_PORT } = process.env;
const { seed } = require('./seed.js');
const {
    getTrails,
    getRunning,
    getCamping,
    getLakes,
    postCreateUser,
    postLogin
} = require('./controller.js');

app.use(express.json());
app.use(cors());

app.get('/reset-db', seed);
app.get('/trails', getTrails);
app.get('/running', getRunning);
app.get('/camping', getCamping);
app.get('/lakes', getLakes);
app.post('/createUser', postCreateUser)
app.post('/login', postLogin)
app.listen(5513, () => console.log('Server is up on running on 5513'));
