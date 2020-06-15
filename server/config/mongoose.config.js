const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/characterKeeper", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Database Connection Established"))
    .catch( err => console.log("Error Connecting to Database: ", err));