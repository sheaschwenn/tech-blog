const {Comment} = require('../models');

const commentData = [
    {
        comment: 'Thanks for all the help!',
        user_id : 2,
        post_id: 1 
    }

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments