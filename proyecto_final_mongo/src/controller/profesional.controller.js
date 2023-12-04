require('../database');
const ProfesionalModel = require('../model/profesional');

function getProfessionals(req, res) {
    if (req.query.firstName == null && req.query.lastName == null) {
        ProfesionalModel.find({})
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            process.exit(-1);
        })
    } else {
        ProfesionalModel.findOne({firstName: req.query.firstName, lastName: req.query.lastName})
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
            process.exit(-1);
        })
    }
}

function addProfessional(req, res) {
    console.log(req.body);
    let profesional = new ProfesionalModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality,
        oscarsNumber: req.body.oscarsNumber,
        profession: req.body.profession
    });
    profesional.save()
    .then((data) => {
        console.log("Profesional añadido correctamente");
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

function updateProfessional(req, res) {
    console.log(req.body);
    ProfesionalModel.findOneAndUpdate({firstName: req.body.firstName, lastName: req.body.lastName}, {$set: {
        age: req.body.age,
        weight: req.body.weight,
        height: req.body.height,
        isRetired: req.body.isRetired,
        nationality: req.body.nationality,
        oscarsNumber: req.body.oscarsNumber,
        profession: req.body.profession
    }})
    .then((data) => {
        console.log("Datos modificados correctamente");
        res.send(data._id);
    })
    .catch((err) => {
        console.log(err);
    })
}

function deleteProfessional(req, res) {
    console.log(req.body);
    ProfesionalModel.deleteOne({firstName: req.body.firstName, lastName: req.body.lastName})
    .then((data) => {
        console.log("Profesional borrado correctamente");
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = { getProfessionals, addProfessional, updateProfessional, deleteProfessional };
