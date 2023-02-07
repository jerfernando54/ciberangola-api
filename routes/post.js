var express = require('express');
var router = express.Router();
const posts = require('./../apiServices/posts/routes');


/**Get posts */
router.use('/posts', posts)




// /* Get all posts */
// router.get('/', (req, res, next) => {
//    controller.getPosts()
//     .then((posts) => {
//         // res.status(200).json(posts)
//         response.success(req, res, posts, 200)
//     })
//     .catch((err) => {
//         response.error(req, res, err, 500)
//     })
// });

// /** Getting post by id */
// router.get('/:postId', function(req, res, next) {
//     res.json(`Post: ${req.params.postId}`);
// });

// /** Posting post*/
// router.post('/', function(req, res, next) {
//     controller.addPost(req.body)
//     .then((post)=> {
//         response.success(req, res, post, 201)
//     })
//     .catch(err => {
//         response.error(req, res, err, 500)
//     })
// });

// router.patch('/updatePost', (req, res, next) => {
//     res.send('Patch router');
// });

// /**Delete post by id */
// router.delete('/:id', function(req, res, next) {
//     res.send('Deleting post: ', req.params.id)
// });

module.exports = router;