class Add{

    constructor(helper,requestRepo){
        this.helper = helper;
        this.requestRepo = requestRepo;
    }

    async handleRequest(req, res){

        try{
            const {userId,orgId} = req.body;

            const userRequestData = await this.requestRepo.getUserRequestDetailByUserIdAndOrgId(userId,orgId);
            
            if(userRequestData.rows.length === 0){
                await this.requestRepo.create(userId,orgId);
                return this.helper.writeResponse(null,{"msg" : "Request has been sent to given Organisation"},res);
            }
            return this.helper.writeResponse({msg : "Request already has been sent to given Organisation" ,code : 404},null,res);
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = Add;