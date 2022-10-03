const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const methodOverride = require('method-override')
const app = express()

// PORT
const PORT = process.env.PORT || 3000

// Connect DB
connectDB()

// Bodyparser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Method overrride to make delete and put request
app.use(methodOverride('_method'))

// CSS middleware
app.use(express.static('public'))

// View engine setup
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

// Setup views
app.use('/products', require('./routes/product-routes'))

// Listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`.white))
