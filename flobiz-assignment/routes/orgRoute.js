const express = require("express");
const router = express.Router();


router.post("/org",(req,res,next) => {
    req.container.resolve('createOrgApi').handleRequest(req,res).catch(next);
});

router.get("/org/:orgId",(req,res,next) => {
    req.container.resolve('fetchOrgApi').handleRequest(req,res).catch(next);
});


router.post("/org/:orgId/request",(req,res,next) => {
    req.container.resolve('requestOrgApi').handleRequest(req,res).catch(next);
});


module.exports = router;