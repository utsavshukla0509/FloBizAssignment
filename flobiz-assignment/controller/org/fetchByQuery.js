class FetchByCreatedOn{

    constructor(orgRepo,helper, orgUtility,orgMemberRepo){
        this.orgRepo = orgRepo;
        this.helper = helper;
        this.orgMemberRepo = orgMemberRepo;
    }

    async handleRequest(req, res){

        try{
            const {offset,limit,sortBy} = req.query;
            console.log(offset,limit,sortBy);

            const orgData = await this.orgRepo.getOrgDetail(limit,offset,sortBy);
            const orgDetail = orgData.rows;
            return this.helper.writeResponse(null,{orgList : orgDetail},res);
            
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = FetchByCreatedOn;