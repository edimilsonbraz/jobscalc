const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// usando template engine
server.set('view engine', 'ejs')

// Mudando a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

// Habilita os aquivos statics
server.use(express.static("public"))

// usar o req.body
server.use(express.urlencoded({ extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))