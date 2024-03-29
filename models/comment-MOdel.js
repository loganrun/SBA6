const mongoose = require('mongoose')

const commentSchema= new mongoose.Schema({

    userId: {
        type: Number,
        required: true
    },
    comment:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)