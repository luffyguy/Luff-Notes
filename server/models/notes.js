const mongoose = require('mongoose');

const noteSchema= new mongoose.Schema({
    title: {
        type : String,
        default: ''
    },
    content: {
        type: String,
        require: true
    }
},{timestamps: true});

const notes = new mongoose.model('Note',noteSchema);

module.exports = notes;