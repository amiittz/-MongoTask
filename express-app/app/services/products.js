const Product = require("../models/product");

module.exports = {
    getAllProducts: async () => {
        const allProducts = await Product.find({});
        return allProducts.map(p => ({
            id: p._id,
            name: p.name
        }));
    },
    getProduct: async (strId) => {
        const product = await Product.findOne({ _id: strId });
        const { name } = product;
        return {
            name
        };

    },
    createProduct: async (name) => {
        const newProduct = new Product({ name });
        return newProduct.save();
    }
}