const mongoose = require('mongoose');


const schemaAuthor = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: false
    }
});

const model = mongoose.model('Author', schemaAuthor);
module.exports = model;