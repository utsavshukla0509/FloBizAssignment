class Update{

    constructor(orgRepo,helper, requestRepo,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgMemberRepo = orgMemberRepo;
        this.requestRepo = requestRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            const memberId = req.params.memberId;
            const orgId = req.params.orgId;
            const action = req.params.action;

            const orgMemberData = await this.orgMemberRepo.getOrgMemberDetailByUserId(userId);
            const role = orgMemberData.rows[0].role;


            if(role === "ADMIN"){
                await this.requestRepo.deleteMemberRequestByMemberIdAndOrgId(orgId,memberId);
                if(action === "accept"){
                    await this.requestRepo.acceptMemberRequestByMemberId(orgId,memberId,"READER");
                    return this.helper.writeResponse(null,{"msg" : "Member request Accepted"},res);
                }
                return this.helper.writeResponse(null,{"msg" : "Member Request Rejected"},res);    
            }
            return this.helper.writeResponse({msg : "You are not admin" ,code : 400},null,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Update;