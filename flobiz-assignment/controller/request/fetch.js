class Fetch{

    constructor(orgRepo,helper, requestRepo,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgMemberRepo = orgMemberRepo;
        this.requestRepo = requestRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            const orgId = req.params.orgId;


            const orgMemberData = await this.orgMemberRepo.getOrgMemberDetailByUserId(userId);
            const role = orgMemberData.rows[0].role;


            if(role === "ADMIN"){
                const requestUserRows = await this.requestRepo.getAllUserRequestDetailByOrgId(orgId);
                const requestData = requestUserRows.rows[0];
                return this.helper.writeResponse(null,{Data : requestData},res);
            }
            return this.helper.writeResponse({msg : "You are not admin" ,code : 400},null,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Fetch;