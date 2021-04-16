const { createContainer,asValue, asClass, InjectionMode, Lifetime } = require('awilix');

/**
 *
 *@returns {Object} lifetime
 */

function getScope(){
    return {lifetime : Lifetime.SINGLETON };
}

//Driver, Config
const middleware = require("../driver");



const container = createContainer({injectionMode : InjectionMode.CLASSIC});


container.register({
    postgresClient : asValue(middleware.postgresClient),
    redisClient : asValue(middleware.redisClient),
});


//APIS
//User
container.register('otpApi', asClass(require("../controller/user/otp"), getScope()));
container.register('verifyApi', asClass(require("../controller/user/verify"), getScope()));

//Org
container.register('createApi', asClass(require("../controller/org/createOrg"), getScope()));



//Utility
container.register('userUtility', asClass(require("../utilities/userUtility"), getScope()));
container.register('helper', asClass(require("../utilities/helper"), getScope()));

//REPO
container.register('userRepo', asClass(require("../repository/userRepo"), getScope()));
container.register('orgRepo', asClass(require("../repository/orgRepo"), getScope()));


module.exports = container;