const mongoose = require('mongoose');


const recipesSchema = new mongoose.Schema({
    user_id:{
        type: Number
    },
    title:{
        type: String
    },
    ingredients:[{
        type: String
    }],
    images:{
        type: String
    },
    directions:{
        type: String
    }
})

module.exports = mongoose.model('Recipes', recipesSchema);