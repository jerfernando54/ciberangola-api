const Model = require('./model');
const Author = require('./../author/model');
const response = require('./../../services/utils/response');


module.exports = {

    async addPost(postDao) {
        const post = new Model(postDao);
        post.save();
    },

    async getPosts() {
       return new Promise((resolve, reject) => {
            Model.find({}).sort({date: -1})
                .populate('author')
                .exec((error, posts) => {
                    if(error) {
                        reject(error);
                        return false;
                    }
                    resolve(posts);
                })
       })
    }
}