let mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/codenotch';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then((db) => {
    console.log("Database connected on " + db.connection.host)
})
.catch((error) => {
    console.log(error);
});
