const mongoose = require('mongoose');

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Credentials", CredentialsSchema);
