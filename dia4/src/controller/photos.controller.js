require('../database');
const PhotoModel = require('../model/photo');

function getAllPhotos(req, res) {
    PhotoModel.find({user_name: req.query.user_name})
    .then((data) => {
        console.log(data);
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
        process.exit(-1);
    })
}

function addPhoto(req, res) {
    console.log(req.body);
    let photo = new PhotoModel({
        user_name: req.body.user_name,
        photo: req.body.photo,
        title: req.body.title,
        description: req.body.description
    });
    photo.save()
    .then((photo) => {
        console.log("Imágen añadida correctamente");
        console.log(photo);
        res.send(photo);
    })
    .catch((err) => {
        console.log(err);
    })
}

function updatePhoto(req, res) {
    console.log(req.body);
    PhotoModel.findOneAndUpdate({title: req.body.title}, {$set: {description: req.body.description}})
    .then((photo) => {
        console.log("Imágen modificada correctamente");
        res.send(photo);
    })
    .catch((err) => {
        console.log(err);
    })
}

function deletePhoto(req, res) {
    console.log(req.body);
    PhotoModel.deleteOne({user_name: req.body.user_name}, {title: req.body.title})
    .then((photo) => {
        console.log("Imágen borrada correctamente");
        console.log(photo);
        res.send(photo);
    })
    .catch((err) => {
        console.log(err);
    })
}

function deleteAllPhotos(req, res) {
    console.log(req.body.user_name);
    PhotoModel.deleteMany({user_name: req.body.user_name})
    .then((photo) => {
        console.log("Imágenes borradas correctamente");
        console.log(photo);
        res.send(photo);
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = { getAllPhotos, addPhoto, updatePhoto, deletePhoto, deleteAllPhotos };
