class Create{

    constructor(orgRepo,helper, orgUtility,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgUtility = orgUtility;
        this.orgMemberRepo = orgMemberRepo;
    }

    async handleRequest(req, res){

        try{
            const {orgName} = req.body;
            const userId = req.get("X-USERID");

            if(!orgName){
                return await this.helper.writeResponse({msg : "missing name of organisation field" ,code : 400},null,res);
            }

            const orgData = await this.orgRepo.getOrgDetailByOrgName(orgName);
            
            if(orgData.rows.length === 0){
                // const date = await this.orgUtility.getDate();
                await this.orgRepo.createOrg(orgName,userId);
                const currOrgData = await this.orgRepo.getOrgDetailByOrgName(orgName);
                const currOrgInfo = currOrgData.rows[0];

                //ORG-MEMBER TABLE FOR ADMIN
                await this.orgMemberRepo.createOrgMember(currOrgInfo.orgid,userId,"ADMIN");
                return this.helper.writeResponse(null,{"msg" : "Organisation is successfully created"},res);
            }
            return this.helper.writeResponse({msg : "Organisation already Exist" ,code : 400},null,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Create;