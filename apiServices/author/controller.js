const dto = require('./dto');
const dao = require('./dao');
const response = require('./../../services/utils/response');
const { check, validationResult } = require('express-validator');

module.exports = {
    
    async getAuthor(req, res) {
        const page = parseInt((req.query.page || 0).toString(), 10);
        const limit = parseInt((req.query.page || 0).toString(), 10);

        const authorDao = await dao.getAuthors(page, limit);
        const authorDto = dto.multiple(authorDao);

        return response.success(req, res, authorDto, 200);
    },

    async postAuthor(body) {
       return new Promise((resolve, reject) => {
        const authorDao = {
            name: body.name,
            email: body.email
        }
        resolve(dao.addAuthor(authorDao))

       });      
    }
}