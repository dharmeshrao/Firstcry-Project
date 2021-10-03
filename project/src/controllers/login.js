const express = require('express');
const router = express.Router();
const {LocalStorage} = require("node-localstorage");
const Login = require('../models/login')
const Signup = require('../models/signup')
router.get('', async (req,res)=>{
res.render('login')
})   

router.post('', async (req,res,next) => {
    const login = req.body
    const signup = await Signup.findOne({email: login.email })
    if(signup == null) {
      return res.send('<script>alert("your alert message"); window.location.href = "/logins"; </script>')  
    }
    else{
      let arr=signup._id
      console.log(arr)
     // localStorage.setItem("details", JSON.stringify(arr));
    
     var localStorage = new LocalStorage('./scratch');
     localStorage.setItem('Name', arr) 
    // console.log(localStorage.getItem('Name'))
      //window.localStorage.setItem('details', JSON.stringify(arr))
        return res.render('home2')
    }
   })
module.exports = router