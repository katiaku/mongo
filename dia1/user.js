const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function(password) {
                return password.length >= 8;
            },
            'El password debería de ser más largo'
        ],
        select: false
    }
});

module.exports = mongoose.model("User", UserSchema);
