require('dotenv').config();
const log = console.log;
const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

async function main(){
    await mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.qv7w4dv.mongodb.net/`)
    log("Conectado com sucesso!")
}

main().catch((err) => console.log(err))

module.exports = main;