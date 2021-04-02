const path = require('path')
require('dotenv').config({
  path: path.join(__dirname, `../.env${process.argv[2]}`),
})
import 'reflect-metadata'
import express from 'express'
import routes from './routes'
import './database/connect'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () =>
  console.log(`Server running ${process.env.PORT}`)
)
