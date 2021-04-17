class Fetch{

    constructor(orgRepo,helper, orgUtility,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgMemberRepo = orgMemberRepo;
    }

    async handleRequest(req, res){

        try{
            const userId = req.get("X-USERID");
            const orgId = req.params.orgId;

            const orgMemberData = await this.orgMemberRepo.getOrgMemberDetailByUserId(userId);
            const orgData = await this.orgRepo.getOrgDetailByOrgId(orgId);
            const orgDetail = orgData.rows[0];


            if(orgMemberData.rows.length === 0){
                return this.helper.writeResponse(null,{orgName : orgDetail.orgname,founder : orgDetail.createdby},res);
            }
            else{
                return this.helper.writeResponse(null,{orgDetail : orgDetail},res);
            }
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Fetch;