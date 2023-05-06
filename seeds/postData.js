const {Post} = require('../models');

const postData = [
    {
        title: 'Css made easy',
        contents: 'Follow these tips and tricks',
        user_id: 1 
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts