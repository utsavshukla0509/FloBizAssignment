class Request{

    constructor(helper,requestRepo,orgMemberRepo){
        this.helper = helper;
        this.requestRepo = requestRepo;
        this.orgMemberRepo = orgMemberRepo;
        this.requestRepo = requestRepo;
    }

    async handleRequest(req, res){

        try{
            const orgId = req.params.orgId;
            const userId = req.get("X-USERID");

            const orgMemberData = await this.orgMemberRepo.getOrgMemberDetailByOrgIdAndUserId(userId,orgId);
            const requestData = await this.requestRepo.getUserRequestDetailByUserIdAndOrgId(userId,orgId);

            if(orgMemberData.rows.length === 0 && requestData.rows.length === 0){
                await this.requestRepo.create(userId,orgId);
                return this.helper.writeResponse(null,{"msg" : "Request has been sent to given Organisation"},res);
            }
            return this.helper.writeResponse({msg : "Request already has been sent to given Organisation" ,code : 400},null,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Request;