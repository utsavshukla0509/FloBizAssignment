


class RequestRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getUserRequestDetailByUserIdAndOrgId(userId,orgId){
            const query = `SELECT * FROM public.request WHERE orgid = '${orgId}' AND userid = '${userId}';`;
            return this.postgresClient.query(query);
        }

        async getAllUserRequestDetailByOrgId(orgId){
            const query = `SELECT * FROM public.request WHERE orgid = '${orgId}';`;
            return this.postgresClient.query(query);
        }
    
    
        async create(userId,orgId){
            const query = `INSERT INTO public.request ("orgid","userid") VALUES ('${orgId}','${userId}');`;
            return this.postgresClient.query(query);
        } 

        async acceptMemberRequestByMemberId(orgId,memberId,role){
            const query = `INSERT INTO public.orgmember ("userid","orgid","role") VALUES ('${memberId}','${orgId}','${role}');`;
            return this.postgresClient.query(query);
        }

        async deleteMemberRequestByMemberIdAndOrgId(orgId,memberId){
            const query = `DELETE FROM public.request WHERE "orgid" = '${orgId}' AND "userid" = '${memberId}';`;
            return this.postgresClient.query(query);
        }


    }
    
    module.exports = RequestRepo;