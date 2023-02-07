const postDao = require('./dao');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema ({
    author: {
        type: Schema.ObjectId,
        ref: 'Author'
    },

    title: {
        type: String,
        require: true
    },

    content: {
        type: String,
        require: true
    },

    image: {
        type: String,
        require: false
    },

    date: {
        type: Date,
        default: Date.now()
    }

})

const model = mongoose.model('Post', mySchema);
module.exports = model;

// module.exports = {

//     async getPosts(page, limit) {
//         return postDao.getPosts(page, limit);
//     }
// }