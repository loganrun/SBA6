const mongoose = require('mongoose');


const recipesSchema = new mongoose.Schema({
    user_id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    ingredients:[{
        type: String,
        required: true
    }],
    images:{
        type: String
    },
    directions:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Recipes', recipesSchema);