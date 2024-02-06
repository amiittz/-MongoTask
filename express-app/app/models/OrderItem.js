const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderItemSchema = new Schema({
    bookId: {type: Schema.Types.ObjectId},
    amount: Number,
});

const orderItem = model('orderItem', orderItemSchema);
module.exports = orderItem;
