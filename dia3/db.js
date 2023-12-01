let mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/bootcamp';

mongoose.connect(uri, {useNewUrlParser: false, useUnifiedTopology: false });

const TeacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
});

const MarkSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeacherSchema]
});

let MarkModel = mongoose.model("Marks", MarkSchema);

let mark1 = new MarkModel({
    date: new Date("2023-10-10"),
    mark: 10,
    student_first_name: "Pepe",
    student_last_name: "Rodríguez",
    group_name: "Remoto",
    subject_name: "Angular",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark2 = new MarkModel({
    date: new Date("2023-10-17"),
    mark: 9,
    student_first_name: "Pepa",
    student_last_name: "Sánchez",
    group_name: "Presencial",
    subject_name: "JavaScript",
    teachers: [
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }, 
        {
            teacher_first_name: "Estefania",
            teacher_last_name: "Cueva"
        }
    ]
});

let mark3 = new MarkModel({
    date: new Date("2023-10-23"),
    mark: 7,
    student_first_name: "Sara",
    student_last_name: "Campos",
    group_name: "Remoto",
    subject_name: "MySQL",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark4 = new MarkModel({
    date: new Date("2023-10-24"),
    mark: 10,
    student_first_name: "John",
    student_last_name: "Doe",
    group_name: "Presencial",
    subject_name: "MongoDB",
    teachers: [
        {
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark5 = new MarkModel({
    date: new Date("2023-11-05"),
    mark: 6,
    student_first_name: "Sonia",
    student_last_name: "Rodríguez",
    group_name: "Presencial",
    subject_name: "CSS",
    teachers: [
        {
            teacher_first_name: "Estefania",
            teacher_last_name: "Cueva"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark6 = new MarkModel({
    date: new Date("2023-11-11"),
    mark: 10,
    student_first_name: "Ana",
    student_last_name: "Martínez",
    group_name: "Remoto",
    subject_name: "Node.js",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }
    ]
});

let mark7 = new MarkModel({
    date: new Date("2023-11-15"),
    mark: 8,
    student_first_name: "Sam",
    student_last_name: "Smith",
    group_name: "Presencial",
    subject_name: "jQuery",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark8 = new MarkModel({
    date: new Date("2023-12-01"),
    mark: 6,
    student_first_name: "Iván",
    student_last_name: "Soto",
    group_name: "Remoto",
    subject_name: "HTML",
    teachers: [
        {
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark9 = new MarkModel({
    date: new Date("2023-12-16"),
    mark: 8,
    student_first_name: "María",
    student_last_name: "Navarro",
    group_name: "Remoto",
    subject_name: "Ionic",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Estefania",
            teacher_last_name: "Cueva"
        }
    ]
});

let mark10 = new MarkModel({
    date: new Date("2023-12-20"),
    mark: 10,
    student_first_name: "Santiago",
    student_last_name: "Pérez",
    group_name: "Remoto",
    subject_name: "Fundamentos",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark11 = new MarkModel({
    date: new Date("2023-10-17"),
    mark: 7,
    student_first_name: "Pepa",
    student_last_name: "Sánchez",
    group_name: "Presencial",
    subject_name: "Angular",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark12 = new MarkModel({
    date: new Date("2023-10-10"),
    mark: 8,
    student_first_name: "Pepe",
    student_last_name: "Rodríguez",
    group_name: "Remoto",
    subject_name: "JavaScript",
    teachers: [
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }, 
        {
            teacher_first_name: "Estefania",
            teacher_last_name: "Cueva"
        }
    ]
});

let mark13 = new MarkModel({
    date: new Date("2023-10-24"),
    mark: 7,
    student_first_name: "John",
    student_last_name: "Doe",
    group_name: "Presencial",
    subject_name: "MySQL",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark14 = new MarkModel({
    date: new Date("2023-10-23"),
    mark: 9,
    student_first_name: "Sara",
    student_last_name: "Campos",
    group_name: "Remoto",
    subject_name: "MongoDB",
    teachers: [
        {
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark15 = new MarkModel({
    date: new Date("2023-11-11"),
    mark: 9,
    student_first_name: "Ana",
    student_last_name: "Martínez",
    group_name: "Remoto",
    subject_name: "CSS",
    teachers: [
        {
            teacher_first_name: "Estefania",
            teacher_last_name: "Cueva"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark16 = new MarkModel({
    date: new Date("2023-11-05"),
    mark: 10,
    student_first_name: "Sonia",
    student_last_name: "Rodríguez",
    group_name: "Presencial",
    subject_name: "Node.js",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }
    ]
});

let mark17 = new MarkModel({
    date: new Date("2023-12-01"),
    mark: 7,
    student_first_name: "Iván",
    student_last_name: "Soto",
    group_name: "Remoto",
    subject_name: "jQuery",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark18 = new MarkModel({
    date: new Date("2023-11-15"),
    mark: 8,
    student_first_name: "Sam",
    student_last_name: "Smith",
    group_name: "Presencial",
    subject_name: "HTML",
    teachers: [
        {
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark19 = new MarkModel({
    date: new Date("2023-12-20"),
    mark: 5,
    student_first_name: "Santiago",
    student_last_name: "Pérez",
    group_name: "Remoto",
    subject_name: "Ionic",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Estefania",
            teacher_last_name: "Cueva"
        }
    ]
});

// let mark20 = new MarkModel({
//     date: new Date("2023-12-16"),
//     mark: 7,
//     student_first_name: "María",
//     student_last_name: "Navarro",
//     group_name: "Remoto",
//     subject_name: "Fundamentos",
//     teachers: [
//         {
//             teacher_first_name: "Jose",
//             teacher_last_name: "Herera"
//         }, 
//         {
//             teacher_first_name: "Menchu",
//             teacher_last_name: "Martín"
//         }
//     ]
// });

let mark21 = new MarkModel({
    date: new Date("2022-02-10"),
    mark: 3,
    student_first_name: "María",
    student_last_name: "Navarro",
    group_name: "Remoto",
    subject_name: "Fundamentos",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

let mark22 = new MarkModel({
    date: new Date("2021-04-16"),
    mark: 3,
    student_first_name: "María",
    student_last_name: "Navarro",
    group_name: "Remoto",
    subject_name: "Fundamentos",
    teachers: [
        {
            teacher_first_name: "Jose",
            teacher_last_name: "Herera"
        }, 
        {
            teacher_first_name: "Menchu",
            teacher_last_name: "Martín"
        }
    ]
});

// MarkModel.insertMany([mark1, mark2, mark3, mark4, mark5, mark6, mark7, mark8, mark9, mark10])
//     .then(function() {
//         console.log("Documentos guardados correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function() {
//         console.log("Error al escribir el documento");
//     });

// MarkModel.insertMany([mark11, mark12, mark13, mark14, mark15, mark16, mark17, mark18, mark19, mark20])
//     .then(function() {
//         console.log("Documentos guardados correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function() {
//         console.log("Error al escribir el documento");
//     });

// MarkModel.insertMany([mark21, mark22])
//     .then(function() {
//         console.log("Documentos guardados correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function() {
//         console.log("Error al escribir el documento");
//     });

// Calcular la nota media de los alumnos de una asignatura concreta.
// MarkModel.aggregate([
//     {$match: {subject_name: "Angular"}}, 
//     {$group: {_id: "Angular", "Nota Media": {$avg: "$mark"}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
// MarkModel.aggregate([
//     {$group: {_id: null, totalStudents: {$sum: 1}}},
//     {$project: {totalStudents: 1, _id: 0}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
// MarkModel.aggregate([
//     {$project: {"Nombre": "$student_first_name", "Apellido": "$student_last_name", _id: 0}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
// MarkModel.aggregate([
//     {$unwind: "$teachers"},
//     {$project: {"Nombre": "$teachers.teacher_first_name", "Apellido": "$teachers.teacher_last_name", _id: 0}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
// MarkModel.aggregate([
//     {$group: {_id: "$group_name", "Número de alumnos": {$sum: 1}}},
//     {$sort: {_id: -1}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
// MarkModel.aggregate([
//     {$group: {_id: "$subject_name", "Nota media": {$avg: "$mark"}}},
//     {$match: {"Nota media": {$gt: 5}}},
//     {$sort: {"Nota media": -1}},
//     {$limit: 5}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
// MarkModel.aggregate([
//     {$group: {_id: "$subject_name", "Número profesores": {$sum: 1}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// tenga fecha del año pasado o anterior.
// MarkModel.aggregate([
//     {$project: {"Nombre": "$student_first_name", "Apellido": "$student_last_name", "Nota": "$mark", "Year": {$year: "$date"}, "_id": 0}},
//     {$match: {$or: [{"Nota": {$gt: 8}}, {"Year": {$in: [new Date().getFullYear() - 1, new Date().getFullYear() - 2]}},
// ]}}])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Obtén la media de las notas que se han dado en el último año por asignatura.
// MarkModel.aggregate([
//     {$group: {_id: "$subject_name", "Nota media": {$avg: "$mark"}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.
// MarkModel.aggregate([
//     {$match: {date: {$gte: new Date(new Date().getFullYear(), 0, 1)}}},
//     {$group: {_id: "$student_first_name", "Nota media": {$avg: "$mark"}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });

// Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
// sea uno que elijáis.
// MarkModel.aggregate([
//     {$unwind: "$teachers"},
//     {$match: {"teachers.teacher_first_name": "Menchu"}},
//     {$group: {_id: "$student_first_name", "Número de asignaturas con Menchu": {$sum: 1}}}
// ])
// .then((result) => {
//     console.log(result);
//     mongoose.disconnect();
// })
// .catch((error) => {
//     console.log(error);
// });
