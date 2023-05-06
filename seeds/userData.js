const {User} = require('../models');

const userData = [
    {
        user_name: 'fluffy',
        password: 'bunny'
    },
    {
        user_name: 'Peter',
        password: 'pickle'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers