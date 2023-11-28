const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: {
        type: Date,
        min: new Date("1900-01-01"),
        max: new Date()
    },
    comments: String,
    rol: {
        type: String,
        required: true,
        enum: ["user", "moderator", "admin"]
    }
});

ProfileSchema.pre('save', function(next) {
    console.log("Middleware de entrada");
    if (this.comments.length > 5) {
        console.log("Comentario añadido correctamente");
        next();
    }
    else
        console.log("Por favor añade un comentario")
});

module.exports = mongoose.model("Profile", ProfileSchema);
