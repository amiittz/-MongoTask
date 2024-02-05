const { getAllBooks, createBook} = require('../services/Book')
const Author = require("../models/Author");


module.exports = {
    listBooks: async (req, res) => {
        try {
            const books = await getAllBooks()
            res.json(books)
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
    addBook: async (req, res) => {
        try {
            const {title,publishingYear,genres,authors,quantity,price} =req.body;
            const book = await createBook(title,publishingYear,genres,authors,quantity,price)
            res.json(book)
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
}