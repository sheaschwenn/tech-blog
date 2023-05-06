const router = require('express').Router();
const {User, Post} = require('../models');

router.get('/:id', async (req,res) => {
    try{
        const userData = await User.findByPk(req.params.id,{
            include:[{model: Post}]
        })
        const user = userData.get({plain:true})
    }catch(err){
        res.status(500).json(err)
    }
})