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

const seedUsers = () => User.bulkCreate(userData,{
    individualHooks: true,
    returning:true
});

module.exports = seedUsers 