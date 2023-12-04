let mongoose = require('mongoose');
// const Profesional = require('./model/profesional');

const uri = 'mongodb://localhost:27017/proyecto_final_mongo';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((db) => {
    console.log("Database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error);
});

// const profesionales = [
//     { firstName: 'Tom', lastName: 'Hanks', age: 65, weight: 75, height: 183, isRetired: false, nationality: 'US', oscarsNumber: 2, profession: 'actor' },
//     { firstName: 'Meryl', lastName: 'Streep', age: 72, weight: 63, height: 169, isRetired: false, nationality: 'US', oscarsNumber: 3, profession: 'actor' },
//     { firstName: 'Leonardo', lastName: 'DiCaprio', age: 47, weight: 80, height: 185, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Brad', lastName: 'Pitt', age: 58, weight: 78, height: 180, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Cate', lastName: 'Blanchett', age: 52, weight: 61, height: 175, isRetired: false, nationality: 'Australia', oscarsNumber: 2, profession: 'actor' },
//     { firstName: 'Robert', lastName: 'Downey Jr.', age: 56, weight: 77, height: 174, isRetired: false, nationality: 'US', oscarsNumber: 0, profession: 'actor' },
//     { firstName: 'Emma', lastName: 'Watson', age: 32, weight: 55, height: 165, isRetired: false, nationality: 'UK', oscarsNumber: 0, profession: 'actor' },
//     { firstName: 'Denzel', lastName: 'Washington', age: 67, weight: 88, height: 184, isRetired: false, nationality: 'US', oscarsNumber: 2, profession: 'actor' },
//     { firstName: 'Julia', lastName: 'Roberts', age: 54, weight: 57, height: 175, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Chris', lastName: 'Hemsworth', age: 38, weight: 90, height: 191, isRetired: false, nationality: 'Australia', oscarsNumber: 0, profession: 'actor' },
//     { firstName: 'Charlize', lastName: 'Theron', age: 46, weight: 63, height: 177, isRetired: false, nationality: 'South Africa', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Matt', lastName: 'Damon', age: 51, weight: 84, height: 178, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Natalie', lastName: 'Portman', age: 40, weight: 55, height: 160, isRetired: false, nationality: 'Israel', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Johnny', lastName: 'Depp', age: 59, weight: 78, height: 178, isRetired: false, nationality: 'US', oscarsNumber: 0, profession: 'actor' },
//     { firstName: 'Anne', lastName: 'Hathaway', age: 39, weight: 58, height: 170, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Joaquin', lastName: 'Phoenix', age: 48, weight: 75, height: 180, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Angelina', lastName: 'Jolie', age: 46, weight: 60, height: 169, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'Ryan', lastName: 'Gosling', age: 41, weight: 76, height: 184, isRetired: false, nationality: 'Canada', oscarsNumber: 0, profession: 'actor' },
//     { firstName: 'Scarlett', lastName: 'Johansson', age: 38, weight: 63, height: 160, isRetired: false, nationality: 'US', oscarsNumber: 1, profession: 'actor' },
//     { firstName: 'George', lastName: 'Clooney', age: 61, weight: 80, height: 180, isRetired: false, nationality: 'US', oscarsNumber: 2, profession: 'actor' },
// ];

// Profesional.insertMany(profesionales)
//     .then((data) => {
//         console.log('Profesionales añadidos exitosamente');
//     })
//     .catch((err) => {
//         console.log(err);
//     });
