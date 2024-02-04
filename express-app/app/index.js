const bodyParser = require("body-parser");
const express = require('express');
const AuthorRouter = require("./routes/Autor");
const BookRouter = require("./routes/Book");

const app = express();
app.use(bodyParser.json());
app.use('/api/book', BookRouter);


module.exports = app;


