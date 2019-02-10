const mongoose = require('mongoose');

const memoryScheme = mongoose.Schema({
    caption: String,
    imagePath: String,
    date: Date,
    addedBy: String
});

module.exports = mongoose.model('Memory', memoryScheme);