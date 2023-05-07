const router = require('express').Router();
const userRoutes = require('./user-route')
const postRoutes = require('./post-route');
const commentRoutes = require('./post-route')


router.use('/user',userRoutes);
router.use('/posts', postRoutes);
router.use('/comments',commentRoutes)

module.exports = router