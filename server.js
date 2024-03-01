const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv= require('dotenv')
const recipes = require('./routes/recipes-route')
//const users = require('./routes/users')
//const comments = require('./routes/comments')

// const Recipes = require('./models/recipes-Model')
// const recipes = require('./utilities/recipes')
// const Users = require('./models/users-model')
// const users = require('./utilities/users')
// const Comments = require('./models/comment-Model')
// const comments = require('./utilities/comments')

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

//Routes
//app.use('/api/users', users);
//app.use('/api/comments', comments);
app.use('/api/recipes', recipes);

//seeed Routes

// app.get ('/seed', async(req, res) => {
//     await Comments.create(comments);
//     res.send('seed')

// })

app.listen(PORT, () =>{
    console.log('Server running on port'+ PORT)
})