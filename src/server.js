import http from 'http'

import app from './app.js'
import { init } from './db/mongodb.js'

await init()

const server = http.createServer (app)
const port = 8080


server.listen (port, () => {

    console.log (`Servidor corriendo en http://localhost:${port}`)
})
