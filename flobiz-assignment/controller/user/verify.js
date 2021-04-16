
class Verify{
    
    constructor(userRepo, userUtility, helper){
        this.userUtility = userUtility;
        this.userRepo = userRepo;
        this.helper = helper;
    }

    async handleRequest(req, res){

            try{
                const {username,email,phoneNo,otp} = req.body;

                if(!username){
                    return this.helper.writeResponse({msg : "missing username field" ,code : 404},null,res);
                }
                else if(!email){
                    return this.helper.writeResponse({msg : "missing email field" ,code : 404},null,res);
                }
                else if(!otp){
                    return this.helper.writeResponse({msg : "missing otp field" ,code : 404},null,res);
                }
                else if(!phoneNo){
                    return this.helper.writeResponse({msg : "missing phone no. field" ,code : 404},null,res);
                }

                const userData = await this.userRepo.getUserDetailByPhoneNo(phoneNo);
                if(userData.rows.length !== 0){
                    return this.helper.writeResponse({msg : "Phone No. already exist!" ,code : 404},{status : false},res);
                }

                const storedOTP = await this.userUtility.getValue(email);
                if(storedOTP !== null){
                    if(storedOTP === otp){
                        await this.userRepo.createUser(username,email,phoneNo);
                        const userData = await this.userRepo.getUserDetailByEmail(email);
                        const userInfo = userData.rows[0];

                        return this.helper.writeResponse(null,{
                            message: "Successfully Authenticated",
                            userInfo
                        },res);
                    }
                    else{
                        return this.helper.writeResponse({msg : "Incorrect OTP" ,code : 404},{status : false},res);
                    }
                }
                else{
                    return this.helper.writeResponse({msg : "OTP expired" ,code : 404},{status : false},res);
                }
                
            }
            catch(err){
                console.log(err);
                return this.helper.writeResponse({msg : "Internal Server Error" ,code : 500},"",res);
            }
    }
};

module.exports = Verify;