const fast2sms = require('fast-two-sms');
const otpGenerator = require('otp-generator')

class OrgUtility{

    constructor(){
    }

    async getDate() {
        return Date.now();
    }
}

module.exports = OrgUtility; 