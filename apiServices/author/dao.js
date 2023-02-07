const Model = require('./model');

module.exports = {

    async addAuthor(authorDao) {
        const author = new Model(authorDao);
        author.save();
    },

    async getAuthors(page, limit) {
        const authors = await Model.find();
        return authors;
    }
  
}