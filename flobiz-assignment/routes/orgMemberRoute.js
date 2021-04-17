const express = require("express");
const router = express.Router();


router.put("/org/:orgId/priviledge",(req,res,next) => {
    req.container.resolve('updateRoleApi').handleRequest(req,res).catch(next);
});


module.exports = router;