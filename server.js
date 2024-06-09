import express from 'express'
import { config } from 'dotenv'

import db from './db.js'
import pictureRouter from './routes/picture.js'

config()
db()

const app = express()
const PORT = process.env.PORT || 3000

app.use('/pictures', pictureRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
