let mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/bootcamp';

mongoose.connect(uri, {useNewUrlParser: false, useUnifiedTopology: false });

const TeacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
});

const SubjectSchema = new mongoose.Schema({
    title: String,
    teachers: [TeacherSchema]
});

const MarkSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: SubjectSchema
});

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarkSchema]
});

let StudentModel = mongoose.model("Students", StudentSchema);

let student1 = new StudentModel({
    firstName: "Pepe",
    lastName: "Rodríguez",
    marks: [{
        date: new Date("2023-10-05"),
        mark: 7,
        subject: {
            title: "Angular",
            teachers: [{
                firstName: "Jose",
                lastName: "Herrera",
                groups: ["Presencial", "Remoto"]
            }]
        }
    }]
});

let student2 = new StudentModel({
    firstName: "Pepa",
    lastName: "Álvarez",
    marks: [{
        date: new Date("2023-11-16"),
        mark: 9,
        subject: {
            title: "JavaScript",
            teachers: [{
                firstName: "Menchu",
                lastName: "Martín",
                groups: ["Presencial", "Remoto"]
            }]
        }
    }]
});

let student3 = new StudentModel({
    firstName: "Ana",
    lastName: "Cascos",
    marks: [{
        date: new Date("2023-09-23"),
        mark: 9,
        subject: {
            title: "MySQL",
            teachers: [{
                firstName: "Dani",
                lastName: "Vera",
                groups: ["Presencial", "Remoto"]
            }]
        }
    }]
});

let student4 = new StudentModel({
    firstName: "Pablo",
    lastName: "Martínez",
    marks: [{
        date: new Date("2023-09-27"),
        mark: 10,
        subject: {
            title: "Mongo",
            teachers: [{
                firstName: "Estefania",
                lastName: "Ceueva",
                groups: ["Presencial", "Remoto"]
            }]
        }
    }]
});

// StudentModel.insertMany([student1, student2, student3, student4])
//     .then(function() {
//         console.log("Documentos guardados correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function() {
//         console.log("Error al escribir el documento");
//     });

// Todas las notas de un alumno.

// StudentModel.findById({_id: "65674daa358c9e66f4d858a6"})
//     .then ((student) => {
//         if (student) {
//             console.log(student.marks);
//         } else {
//             console.log("El estudiante no se ha encontrado");
//         }
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Todos las asignaturas de un alumno.
// StudentModel.findOne({firstName: "Pepe", lastName: "Rodríguez"})
//     .then ((student) => {
//         if (student) {
//             for (let mark of student.marks) {
//                 console.log(mark.subject.title);
//             }
//         } else {
//             console.log("El estudiante no se ha encontrado");
//         }
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Todos los profesores de un alumno.
// StudentModel.findOne({firstName: "Pepe", lastName: "Rodríguez"})
//     .then ((student) => {
//         if (student) {
//             for (let mark of student.marks) {
//                 console.log(mark.subject.teachers);
//             }
//         } else {
//             console.log("El estudiante no se ha encontrado");
//         }
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });
