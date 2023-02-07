const dto = require('./dto');
const dao = require('./dao')
const model = require('./model');
const response = require('../../services/utils/response');


module.exports = {
    async getPosts(req, res) {

        const posts = await dao.getPosts();
        const postsDto = dto.multiple(posts);

        return response.success(req, res, postsDto, 200);
    },

    async postPost(body) {
        return new Promise((resolve, reject) => {
            const post = {
                title: body.title,
                content: body.content,
                author: body.author,
                date: new Date()
            }

            resolve(dao.addPost(post))
        });
    }
}

