const router = require('express').Router();
const{User} = require('../../models');

// create a new user
// router.post('/', async (req,res) => {
//     try{
//         const userData = await User.create({
//             user_name:req.body.user_name,
//             password: req.body.password
//         })

//         req.session.save(() =>{
//             req.session.user_id = userData.id;
//             req.session.user_name = userData.user_name
//             req.session.logged_in = true
//         })
//         res.status(200).json({user:userData});
//     }catch(err){
//         res.status(400).json(err)
//     }
// })

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create({
            user_name: req.body.user_name,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.user_name = newUser.user_name;
            req.session.logged_in = true;

            res.json(newUser);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req,res) => {
    try{
        const userData = await User.findOne({where: {user_name: req.body.user_name}});

        if(!userData){
            res.status(400).json({message: 'Incorrect username or password'})
            return
        }

        const passwordInput = await userData.checkPassword(req.body.password);
        if(!passwordInput){
            res.status(400).json({message: 'Incorrect username or password'})
            return
        }

        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true

            res.json({user :userData, message: 'You are now logged-in'})
        })
    }catch(err){
        res.status(500).json(err)
    }
})
router.delete('/:id', async (req,res) => {
    try{
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if(!userData){
            res.status(400).json({message: 'No user found'})
            return;
        }
        res.status(200).json(userData)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/logout', async(req,res) => {
    if(req.session.logged_in){
        req.session.destroy(() =>{
            res.status(204).end();
        });
    }else{
        res.status(500).end()
    }
})
module.exports = router
