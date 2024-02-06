const Order = require("../models/Order")

module.exports = {
    getAllOrders: async () => {
        const orders = await Order.find();
        return orders.map(p => ({
            items:p.items,
            totalPrice: p.totalPrice,
            date: p.date
        }));
    }
}