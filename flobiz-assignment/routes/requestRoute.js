const express = require("express");
const router = express.Router();


router.get("/request/:orgId",(req,res,next) => {
    req.container.resolve('fetchRequestApi').handleRequest(req,res).catch(next);
});

router.post("/request/:orgId/:memberId/:action",(req,res,next) => {
    req.container.resolve('updateRequestApi').handleRequest(req,res).catch(next);
});

module.exports = router;