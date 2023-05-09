const router = require('express').Router();
const {User, Post} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res) => {
    try{
        const userData = await User.findByPk(req.session.user_id,{
            attributes:{exclude:['password']},
            include:[{model: Post}]
        })
        const user = userData.get({plain:true})
        res.render('dashboard',{
            ...user,
            logged_in:req.session.logged_in
        })
    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/update/:id', withAuth, async (req,res)=>{
    try{
        const postData = await Post.findOne({
        where:{
            id:req.params.id
        },
      
    })
    const post = postData.get({plain:true})
    res.render('editPost',{post, logged_in:req.session.logged_in})
}catch(err){
    res.status(500).json
}
})
router.get('/login', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router