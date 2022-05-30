const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt')
const { registerValid, loginValid } = require('../valid');

router.post('/register', async (req, res) => {
  
   const { error } = registerValid(req.body);
   if(error) return res.status(400).send(error.details[0].message);

    
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('Email already exists')


        const saltRounds =10
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds)

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashPassword,
        date: req.body.date
    });
    try {
        const savedUser = await user.save();
        res.send({ user: user._id });

    }catch(err){
        res.status(400).send(err);
    }

});

//LOGIN
router.post('/login', async (req, res) => {
   
   const { error } = loginValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
   
 
   const user = await User.findOne({email: req.body.email})
   if(!user) return res.status(400).send('Email is not found')

   const validPass = await bcrypt.compare(req.body.password, user.password)
   if(!validPass) return res.status(400).send('Invalid Password') 



})  

module.exports = router;