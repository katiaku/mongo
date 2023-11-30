let mongoose = require('mongoose');
const Fakerator = require("fakerator");
const fakerator = Fakerator("de-DE");

const uri = 'mongodb://localhost:27017/fakerator';

mongoose.connect(uri, {useNewUrlParser: false, useUnifiedTopology: false });

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    isLoggedIn: Boolean,
    age: Number,
    favNumber: Number
});

let UserModel = mongoose.model("Users", UserSchema);

let user1 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user2 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user3 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user4 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user5 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user6 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user7 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user8 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user9 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user10 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user11 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

let user12 = new UserModel({
    firstName: fakerator.names.firstName(),
    lastName: fakerator.names.lastName(),
    country: fakerator.address.country(),
    isLoggedIn: fakerator.random.boolean(),
    age: fakerator.date.age(18, 125),
    favNumber: fakerator.random.number(0, 100)
});

// UserModel.insertMany([user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12])
//     .then(function() {
//         console.log("Documentos guardados correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function() {
//         console.log("Error al escribir el documento");
//     });

// Mostrar en el orden alfabético los apellidos de los usuarios logeados
// UserModel.aggregate([
//     {$match: {isLoggedIn: true}}, 
//     {$sort: {lastName: 1}},
//     {$project: {lastName: 1, _id: 0}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Mostrar top 5 paises por el número de usuarios
// UserModel.aggregate([
//     {$group: {_id: {"Country": "$country"}, "Users": {$sum: 1}}},
//     {$sort: {country: -1}},
//     {$limit: 5}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Mostrar los nombres, apellidos y la edad de los usuarios cuyo edad sea más grande que 100
// UserModel.aggregate([
//     {$project: {firstName: 1, lastName: 1, age: 1, _id: 0}},
//     {$match: {age: {$gt: 100}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });
