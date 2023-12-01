const { Schema, model } = require('mongoose');

const PhotoSchema = new Schema({
    user_name: String,
    photo: String,
    title: String,
    description: String
});

module.exports = model("Photo", PhotoSchema, "photo");
