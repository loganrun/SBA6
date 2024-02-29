const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const Recipes = require('./models/recipes-Model')
const recipes = require('./utilities/recipes')

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(process.env.mongoURI)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
    console.log('Connected to MongoDB')
})


//seeed Routes

app.get ('/seed', async(req, res) => {
    await Recipes.create(recipes);
    res.send('seed')

})

app.listen(PORT, () =>{
    console.log('Server running on port'+ PORT)
})