const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://krishpatel8910:Jenil2008@cluster0.gepbkje.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true 
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;

require('./employee.model');
