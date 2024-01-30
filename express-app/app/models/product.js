const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: String,
    createdAt: { type: Date, default: Date.now },
});

const Product = model('Product', productSchema);
module.exports = Product;
