const fast2sms = require('fast-two-sms');
const otpGenerator = require('otp-generator')

class UserUtility{

    constructor(redisClient){
        this.redisClient = redisClient;
    }

    async getValue(key) {
        return await this.redisClient.get(key);
    }


    async createOTP(email,phoneNo){
        const otp = otpGenerator.generate(6, { alphabets : false,specialChars : false,upperCase : false });

        // set otp in redis (with email as key) with expiration time(5 min)
        // this.redisClient.set(email,otp,'PX',300000);

        this.redisClient.set(email,123456,'PX',600000);
        return null;
        // const options = {authorization : process.env.API_KEY , message : otp ,  numbers : [phoneNo]} 
        // return await fast2sms.sendMessage(options);
    }

}

module.exports = UserUtility; 