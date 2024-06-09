const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true)

async function main() {
  try {
    const databaseUrl = process.env.DATABASE_URI
    if (!databaseUrl) {
      throw new Error('Variável de ambiente DATABASE_URI não foi definida')
    }
    await mongoose.connect(databaseUrl)
    console.log('Conectado ao banco de dados')
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados: \n', err)
  }
}

main()

module.exports = main
