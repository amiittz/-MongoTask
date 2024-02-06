const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const {OrderItem} = require("../models/OrderItem");

const orderSchema = new Schema({
    items:[OrderItem],
    totalPrice: Number,
    date: Number//timestamp
});

const Order = model('Order', orderSchema);
module.exports = Order;
