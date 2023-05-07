const router = require('express').Router();
const {Post, Comment, User} = require('../models')
// need to get a authorization deal going 
const withAuth = require('../utils/auth')

router.get('/',async (req, res) =>{
    try{
        const postData = await Post.findAll({
            include:[
                {
                    model: Comment,
                },
                {
                    model: User,
                    attributes:['user_name']
                }
            ]
        })
        const posts = postData.map((post) => post.get({plain:true}));
        res.render('homepage',{posts, logged_in:req.session.logged_in})
    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/post/:id', async(req,res)=>{
    try{
        const postData = await Post.findByPk(res.params.id,{
            include:[
                {model:Comment}, 
                {
                    model: User,
                attributes: ['user_name']
                }
        ]
        })
        const post = postData.get({plain:true})

        res.render('post',{post})
        
    }catch (err){
        res.status(500).json(err)
    }
})

module.exports = router