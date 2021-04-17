const Joi = require('joi');

class Update{

    constructor(orgRepo,helper, orgUtility,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgUtility = orgUtility;
        this.orgMemberRepo = orgMemberRepo;
    }

    isMessageValid(msg){
        const schema = Joi.object({
            orgName : Joi.string().optional(),
            createdBy : Joi.string().optional() 
        });
        const {error,value} = schema.validate(msg);
        if(error){return false;}
        return true;
    }

    async handleRequest(req, res){

        try{
            
            const userId = req.get("X-USERID");
            const orgId = req.params.orgId;

            if(!this.isMessageValid(req.body)){
                return await this.helper.writeResponse({msg : "Incorrect field type" ,code : 400},null,res);
            }

            let updateField = {};
            const orgData = await this.orgRepo.getOrgDetailByOrgId(orgId);
            const orgCurrData = orgData.rows[0];
            updateField.orgName = orgCurrData.orgname;
            updateField.createdBy = orgCurrData.createdby;  


            const {orgName,createdBy} = req.body;

            if(orgName !== undefined){
                updateField.orgName = orgName;
            }
            if(createdBy != undefined){
                updateField.createdBy = createdBy;
            }

            const orgMemberData = await this.orgMemberRepo.getOrgMemberDetailByOrgIdAndUserId(userId,orgId);
            const orgMemberRole = orgMemberData.rows[0].role;

            if(orgMemberRole === "ADMIN" || orgMemberRole === "EDITOR"){
                await this.orgRepo.updateOrg(updateField.orgName,updateField.createdBy,orgId);
                return this.helper.writeResponse(null,{"msg" : "Data is successfully updated"},res);
            }
            else{
                return this.helper.writeResponse({msg : "You don't have any rights to update the data" ,code : 400},null,res);
            }
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Update;