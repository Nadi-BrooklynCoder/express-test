//fruitController.js

const express = require('express');
const fruits = express.Router();
const fruitsArray = require('../models/fruits');

fruits.get('/', (req, res) => {
    res.json(fruitsArray);
});

fruits.get('/search', (req, res) => {
    const { family } = req.query;
    const fruitsWithFamily = fruitsArray.filter(fruit => fruit.family.toLowerCase() === family.toLowerCase())
    res.json(fruitsWithFamily);
})

fruits.get('/:fruitName', (req, res) => {
    const { fruitName } = req.params;
    const foundFruit = fruitsArray.filter(fruit => fruit.name.toLowerCase() === fruitName.toLowerCase());
    res.json(foundFruit[0]);
});

module.exports = fruits;