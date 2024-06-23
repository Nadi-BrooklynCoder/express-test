//app.js

const express = require('express');
const app = express();
const fruitsController = require('./controllers/fruitsController')



app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/fruits', fruitsController)



module.exports = app;