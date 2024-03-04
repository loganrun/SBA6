const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

usersSchema.index({ name: 1, type: -1 })

module.exports = mongoose.model('Users', usersSchema);