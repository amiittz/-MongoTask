const Author = require("../models/Author")

module.exports = {
    getAllAuthors: async () => {
        const allAuthors = await Author.find();
        return allAuthors.map(p => ({
            name: p.name,
            country: p.country
        }));
    },
    setAuthor: async () => {//עדכון
        
    },
    createAuthor: async (name,country) => { //הוספה
        const author = new Author({name,country});
        return author.save();
    }
}