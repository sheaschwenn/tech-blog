const router = require('express').Router();
const{Post} = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req,res) =>{
    try{
        const postData = await Post.create({
            ...req.body,
        user_id:req.session.user_id,
    })
        res.status(200).json(postData)
    } catch(err){
        res.status(400).json(err)
    }
})
router.put('/:id', withAuth, async (req,res) => {
    try{
        const postData = await Post.update({
            where:{
                id: req.params.id,
                user_id: req.session.user_id
            },
        })
        if(!postData){
            res.status(404).json({message: "No post with this id!"});
            return;
        }
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err)
    }
})


router.delete('/:id',withAuth, async (req,res) =>{
    try{
        const postData = await Post.destroy({
            ...req.body,
            where:{
                id: req.params.id,
                user_id: req.session.user_id
            },
        })
        if(!postData){
            res.status(404).json({message: "No post with this id!"});
            return;
        }
        res.status(200).json(postData);
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router