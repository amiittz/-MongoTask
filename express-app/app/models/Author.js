const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const authorSchema = new Schema({
    _id: Object,
    name: String,
    country: String,
});

const Aothor = model('Aothor', authorSchema);
module.exports = Aothor;
