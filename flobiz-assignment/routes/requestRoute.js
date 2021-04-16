const express = require("express");
const router = express.Router();


router.post("/add",(req,res,next) => {
    req.container.resolve('addApi').handleRequest(req,res).catch(next);
});



module.exports = router;