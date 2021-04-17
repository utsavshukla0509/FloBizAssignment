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
container.register('createOrgApi', asClass(require("../controller/org/create"), getScope()));
container.register('fetchOrgApi', asClass(require("../controller/org/fetch"), getScope()));
container.register('fetchOrgByQueryApi', asClass(require("../controller/org/fetchByQuery"), getScope()));
container.register('requestOrgApi', asClass(require("../controller/org/request"), getScope()));
container.register('updateOrgApi', asClass(require("../controller/org/update"), getScope()));

//Request
container.register('fetchRequestApi', asClass(require("../controller/request/fetch"), getScope()));
container.register('updateRequestApi', asClass(require("../controller/request/update"), getScope()));

//OrgMember
container.register('updateRoleApi', asClass(require("../controller/orgMember/priviledge"), getScope()));


//Utility
container.register('userUtility', asClass(require("../utilities/userUtility"), getScope()));
container.register('helper', asClass(require("../utilities/helper"), getScope()));
container.register('orgUtility', asClass(require("../utilities/orgUtility"), getScope()));

//REPO
container.register('userRepo', asClass(require("../repository/userRepo"), getScope()));
container.register('orgRepo', asClass(require("../repository/orgRepo"), getScope()));
container.register('orgMemberRepo', asClass(require("../repository/orgMemberRepo"), getScope()));
container.register('requestRepo', asClass(require("../repository/requestRepo"), getScope()));


module.exports = container;