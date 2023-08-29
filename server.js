require('dotenv').config()
require('./db');
const log = console.log;
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const pictureRouter = require('./routes/picture');

app.use('/pictures', pictureRouter)

app.listen(port, () => {
    log(`Servidor rodando na porta ${port}`)
})