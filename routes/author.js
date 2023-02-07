const express = require('@awaitjs/express');
const router = express.Router();

const author = require('./../apiServices/author/routes');

router.use('/author', author);

module.exports = router;