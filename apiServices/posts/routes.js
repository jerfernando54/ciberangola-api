const express = require('@awaitjs/express');
const controller = require('./controller');
const { check, validationResult } = require('express-validator');
const response = require('./../../services/utils/response');

const router = express.Router();

router.postAsync('/', 
        check("title", "Input required").notEmpty(),
        check("content", "Input required").notEmpty(),
        check("author", "Input required").notEmpty(),
        (req, res) => {
            const errors = validationResult(req);
            if(errors.isEmpty()){
                controller.postPost(req.body)
                    .then(() => {
                        response.success(req, res, 'Post created successfully', 201)
                    })
                    .catch((err) => {
                        response.error(req, res, 'Internal error', 500)
                    })
            }
            else {
                response.error(req, res, errors.mapped(), 500)
            }
        }
);

router.getAsync('/', controller.getPosts);

router.getAsync('/:id', (req, res) => {
    controller.getPostById(req.params.id)
        .then((post) => {
            response.success(req, res, post, 200)
        }).catch((err) => {
            response.error(req, res, 'Internal error', 500)
        })
});

module.exports = router;