const bodyParser = require("body-parser");
const express = require('express');
const AuthorRouter = require("./routes/Autor");


const app = express();
app.use(bodyParser.json());
app.use('/api/Author', AuthorRouter);


module.exports = app;


