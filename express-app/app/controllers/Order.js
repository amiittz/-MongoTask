const { getAllOrders } = require('../services/Order')

module.exports = {
    listOrder: async (req, res) => {
        try {
            const orders = await getAllOrders()
            res.json(orders)
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
    
}