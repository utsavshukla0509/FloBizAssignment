const express = require("express");
const router = express.Router();


router.post("/create",(req,res,next) => {
    req.container.resolve('createApi').handleRequest(req,res).catch(next);
});



module.exports = router;