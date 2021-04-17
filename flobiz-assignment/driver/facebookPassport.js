const Strategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();

module.exports = function(passport){
    //GOOGLE AUTH
    passport.serializeUser(function(user,cb){
        cb(null,user);
    });

    passport.deserializeUser(function(obj,cb){
        cb(null,obj);
    });

    passport.use(new FacebookStrategy({
        clientID : process.env.FACEBOOK_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL : 'http://localhost:5000/auth/facebook/callback'
    },
    function (accessToken,refreshToken,profile,done){
        done(null,profile);
    }
    ));

}


