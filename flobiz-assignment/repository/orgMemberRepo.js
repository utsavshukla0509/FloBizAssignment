


class OrgMemberRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getOrgMemberDetailByUserId(userId,orgId){
            const query = `SELECT * FROM public.orgmember WHERE userid = '${userId}';`;
            return this.postgresClient.query(query);
        }

        async getOrgMemberDetailByOrgIdAndUserId(userId,orgId){
            const query = `SELECT * FROM public.orgmember WHERE orgid = '${orgId}' AND userid = '${userId}';`;
            return this.postgresClient.query(query);
        }
    
    
        async createOrgMember(orgId,userId,role){
            const query = `INSERT INTO public.orgmember ("userid","orgid","role") VALUES ('${userId}','${orgId}','${role}');`;
            return this.postgresClient.query(query);
        }

        async updateRole(memberId,orgId,role){
            const query = `UPDATE public.orgmember SET role = '${role}' WHERE orgid = '${orgId}' AND userid = '${memberId}';`;
            return this.postgresClient.query(query);
        }

    }
    
    module.exports = OrgMemberRepo;