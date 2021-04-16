class GenerateOTP{

    constructor(helper, userUtility){
        this.helper = helper;
        this.userUtility = userUtility;
    }

    async handleRequest(req, res){

        try{
            const {email,phoneNo} = req.body;
            if(!email || !phoneNo){
                return this.helper.writeResponse({msg : "Authentication failed" ,code : 404},null,res);
            }

            const sms = await this.userUtility.createOTP(email,phoneNo);
            // return res.send(sms);
            // return this.helper.writeResponse(null,{"msg" : "OTP has been sent to your Gmail"},res);
            
        }
        catch(err){
            console.log(err);
            return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
        }
    }

};

module.exports = GenerateOTP;