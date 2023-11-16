import express from 'express'
import bodyParser from 'body-parser'
import handlebars from 'express-handlebars'
import path from 'path'

import { __dirname } from './utils.js'
import productsRouter from './routes/products/productsRouter.js'
import cartsRouter from './routes/carts/cartsRouter.js'


const app = express()


app.engine ('handlebars', handlebars.engine())
app.set ('views', path.join (__dirname, 'views'))
app.set ('view engine', 'handlebars')

app.use (express.json ())
app.use (express.urlencoded ({ extended: true }))
app.use (bodyParser.urlencoded({ extended: true }))
app.use (express.static (path.join (__dirname, '../public')))


app.use ('/api', productsRouter, cartsRouter)


app.use ((error, req, res, next) => {

    const message = `Ah ocurrido un error desconocido: ${error.message}`

    console.log (message)
    res.status(500).json ({ status: 'error', message})
})

export default app
