const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    user_name: String,
    photo: String,
    title: String,
    description: String
});

module.exports = mongoose.model("Photo", PhotoSchema);
