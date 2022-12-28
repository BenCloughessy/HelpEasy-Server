const express = require('express');
const Shelter = require('../models/shelter');
const addressToCoord = require('../addressToCoord')

const shelterRouter = express.Router();

shelterRouter.route('/')
.get((req, res, next) => {
    Shelter.find()
    .then(shelters => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(shelters);
    })
    .catch(err => next(err));
})
.post((req, res, next) => {
    Shelter.create(req.body)
    .then(shelter => {
        console.log('Shelter Created ', shelter);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(shelter);
    })
    .catch(err => next(err));
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported');
});


module.exports = shelterRouter;