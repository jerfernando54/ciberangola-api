const express = require('@awaitjs/express');
const controller = require('./controller');
const response = require('./../../services/utils/response');
const { check, validationResult } = require('express-validator');

const router = express.Router();

router.getAsync('/', controller.getAuthor);

router.postAsync('/',  check("name", "required input").notEmpty(), (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        controller.postAuthor(req.body)
            .then(() => {
                response.success(req, res, "author created successfully", 201);
            })
            .catch((err) => {
                response.error(req, res, 'internal Error', 500)
            })
    } else {
        response.error(req, res, errors.mapped(), 500)
    }
})

module.exports = router;