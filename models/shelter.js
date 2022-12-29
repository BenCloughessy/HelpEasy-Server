const mongoose = require('mongoose')
const Schema = mongoose.Schema

const shelterSchema = new Schema({
    name: String,
    url: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    longitude: Number,
    latitude: Number
})

const Shelter = mongoose.model('Shelter', shelterSchema);

module.exports = Shelter;