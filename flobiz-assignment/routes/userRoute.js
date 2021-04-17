const express = require("express");
const router = express.Router();
const passport = require('passport');


//GOOGLE
router.get("/google",passport.authenticate('google',{scope:['email','profile']}));

router.get('/google/callback',passport.authenticate('google',
{successRedirect : '/auth/getOTP', failureRedirect:'/auth/fail'}),
(req,res,next)=>{
    console.log(req.user,req.isAuthenticated());
        res.send('user is loggedIn');
    });

 
//FACEBOOK
router.get('/facebook',passport.authenticate('facebook'));

router.get('/facebook/callback',passport.authenticate('facebook',{failureRedirect:'/auth/fail'}),
    (req,res,next)=>{
        console.log(req.user,req.isAuthenticated());
        res.send('user is loggedIn');
    });    




router.get('/fail',(req,res,next)=>{
    res.send('user loggedIn is Failed');
})


router.get('/logout',(req,res,next)=>{
    req.logOut();
    console.log(req.isAuthenticated());
    res.send('user is loggedOut');
})


router.post("/otp",(req,res,next) => {
    req.container.resolve('otpApi').handleRequest(req,res).catch(next);
});

router.post("/verify",(req,res,next) => {
    req.container.resolve('verifyApi').handleRequest(req,res).catch(next);
});










module.exports = router;