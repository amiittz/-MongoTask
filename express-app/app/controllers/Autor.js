const { getAllBooks, setAuthor, createAuthor } = require('../services/Author')

module.exports = {
    listAuthors: async (req, res) => {
        try {
            const products = await getAllBooks()
            res.json(products)
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
    addAuthor: async (req, res) => {
        try {
            const { name, country } = req.body
            await createAuthor(name,country)
            res.json('success')
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
    updateAuthor: async (req, res) => {
        try {
            console.log(req.body);
            const { name, country,_id } = req.body
            await setAuthor(_id,name,country)
            res.json('success')
        }
        catch (err) {
            res.status(500).send(err)
        }
    }
}