let mongoose = require('mongoose');
const Photos = require('./photos');

const uri = 'mongodb://localhost:27017/codenotch';

mongoose.connect(uri, {useNewUrlParser: false, useUnifiedTopology: false });

let photo1 = {
    user_name: "Pepe",
    photo: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "foto de Pepe",
    description: "foto de perfil en blanco y negro"
};

let photo2 = {
    user_name: "Pepa",
    photo: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/10_October/persians/Persian+Cat+Facts+History+Personality+and+Care+_+ASPCA+Pet+Health+Insurance+_+white+Persian+cat+resting+on+a+brown+sofa-min.jpg",
    title: "gato",
    description: "foto de mi gato"
};

let photo3 = {
    user_name: "Susana",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4HJhnJo07reTM0Lta1HoTollHloqsqRUVw&usqp=CAU",
    title: "perro",
    description: "foto de mi perro"
};

let photo4 = {
    user_name: "Pepe",
    photo: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D",
    title: "viaje",
    description: "el viaje a las montañas de este verano"
};

let photo5 = {
    user_name: "Pepa",
    photo: "https://media.istockphoto.com/id/1471657494/photo/young-digital-nomad-man-working-by-the-sea.webp?b=1&s=170667a&w=0&k=20&c=zHg2ST26mVq0aM3Z3mocpsAw3ZeNXVUWzsH6LguNUBk=",
    title: "programador",
    description: "foto mi trabajo"
};

let photo6 = {
    user_name: "Susana",
    photo: "https://media.istockphoto.com/id/882302344/es/foto/aeropuerto-de-estar-para-salidas.jpg?s=612x612&w=0&k=20&c=jkOnKS-mJJKv1RMG-yeGj_G9NbtkGWmBgOTAF-Im8is=",
    title: "aeropuerto",
    description: "en el aeropuerto de Madrid"
};

// Photos.insertMany([photo1, photo2, photo3, photo4, photo5, photo6])
//     .then(function() {
//         console.log("Documentos guardados correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function() {
//         console.log("Error al escribir el documento");
//     });

// Photos.find({user_name: "Pepe"})
//     .then ((photos) => {
//         if (photos) {
//             console.log(photos);
//         } else {
//             console.log("Photos no se han encontrado");
//         }
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Photos.updateOne({title: "programador"}, {description: "foto de mi trabajo"})
//     .then((dato) => {
//         console.log("Se ha modificado correctamente");
//         console.log(dato);
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Photos.deleteOne({user_name: "Pepe", title: "foto de Pepe"})
//     .then((dato) => {
//         console.log("Se ha eliminado correctamente");
//         console.log(dato);
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// Photos.deleteMany({user_name: "Pepe"})
//     .then((dato) => {
//         console.log("Se ha eliminado correctamente");
//         console.log(dato);
//         mongoose.disconnect();
//     })
//     .catch((error) => {
//         console.log(error);
//     });
