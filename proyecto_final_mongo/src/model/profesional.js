const { Schema, model } = require('mongoose');

const ProfesionalSchema = new Schema({
    firstName: String,
    lastName: String,
    age: Number,
    weight: Number,
    height: Number,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String
});

module.exports = model("Profesional", ProfesionalSchema, "profesional");
