let mongoose = require('mongoose');
let User = require('./user');
let Profile = require('./profile');
let Credentials = require('./credentials');

// const uri = 'mongodb+srv://user1:s492hnG56@cluster0.rqjqi7u.mongodb.net/codenotch?retryWrites=true&w=majority';
const uri = 'mongodb://localhost:27017/codenotch2';

mongoose.connect(uri, {useNewUrlParser: false, useUnifiedTopology: false });

let userDocument1 = new User({
    login: "Iván",
    password: "ivan1234"
});

let userDocument2 = new User({
    login: "Ana",
    password: "ana01234"
});

userDocument1.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

userDocument2.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

let profileDocument1 = new Profile({
    name: "Pepe",
    surname: "García",
    dateOfBirth: new Date("1995-12-20"),
    comments: "",
    rol: "user"
});

let profileDocument2 = new Profile({
    name: "Ana",
    surname: "García",
    dateOfBirth: new Date("2000-07-02"),
    comments: "comentario",
    rol: "user"
});

profileDocument1.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

profileDocument2.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

let credentialsDocument1 = new Credentials({
    address: "Gran Vía, Madrid",
    phone: "666887766",
    email: "pepe@mail.com"
});

let credentialsDocument2 = new Credentials({
    address: "Calle Mayor, Madrid",
    phone: "667995544",
    email: "ana@mail.com"
});

credentialsDocument1.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

credentialsDocument2.save().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
