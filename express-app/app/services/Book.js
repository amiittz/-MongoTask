const Book = require("../models/Book")
const author=require("../models/Author");
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
    createBook: async (title,publishingYear,genres,authors,quantity,price) => { //הוספה
        try{
        const existingAuthor = await author.findOne({ _id: authors._id });//בדיקה לפי הID
        if (existingAuthor){
            const book = new Book({title,publishingYear,genres,authors,quantity,price});
            return book.save();
        }else{
            return "author dont exists";
        }
        }catch (err) {
            res.status(500).send(err)
        }
    },


    
}