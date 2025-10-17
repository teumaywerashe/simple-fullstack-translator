const mongoose = require('mongoose')
const wordSchema = new mongoose.Schema({
    english: String,
    amharic: String,
    afaan_oromo: String,
    tigrinya: String,
    somali: String,
    arabic: String
})
module.exports = mongoose.model('Words', wordSchema)