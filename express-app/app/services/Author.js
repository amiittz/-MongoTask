const Aothor = require("../models/Author")

module.exports = {
    getAllBooks: async () => {
        const allBooks = await Author.findAll();
        return allProducts.map(p => ({
            id: p._id,
            name: p.name
        }));
    },
    setAuthor: async () => {//עדכון
        
    },
    createAuthor: async (id,name,country) => { //הוספה
        const author = new Author({id,name,country});
        return author.save();
    }
}