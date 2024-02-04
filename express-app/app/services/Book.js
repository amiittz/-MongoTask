const Book = require("../models/Book")

module.exports = {
    getAllBooks: async () => {
        const allBooks = await Book.find();
        return allBooks.map(p => ({
            title: p.title,
            publishingYear: p.publishingYear,
            genres: p.genres,
            authors: p.authors,
            quantity: p.quantity,
            price: p.price
        }));
    },
    
}