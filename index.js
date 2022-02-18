// Imports
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 8080
const connection = require('./database/connection')
const router = require('./routes')

// view engine
app.set('view engine', 'ejs')
app.use(express.static('public'))

// body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Database
connection
    .authenticate()
    .then(() => {
        console.log(`successful connection`)
    }).catch((error) => {
        console.log(`failed connection`)
    })

// Routes
app.use(router)

// server
app.listen(PORT, () => {console.log(`Running on port ${PORT}`)})