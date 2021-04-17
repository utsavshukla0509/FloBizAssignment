class Role{

    constructor(orgRepo,helper,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgMemberRepo = orgMemberRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            const orgId = req.params.orgId;
            const {memberId,priviledge} = req.body;

            const orgMemberData = await this.orgMemberRepo.getOrgMemberDetailByUserId(userId);
            const role = orgMemberData.rows[0].role;


            if(role === "ADMIN"){
                await this.orgMemberRepo.updateRole(memberId,orgId,priviledge);
                return this.helper.writeResponse(null,{"msg" : "Role is changed"},res);    
            }
            return this.helper.writeResponse({msg : "You are not admin" ,code : 400},null,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Role;