const express = require('express');
const router = express.Router();
const Signup = require('../models/signup')

router.get("",(req,res)=>{
   res.render("signup")
})
router.post('', async (req,res,next) => {
    const signup = await Signup.create(req.body)
    return res.render("login")
   })
 module.exports = router;