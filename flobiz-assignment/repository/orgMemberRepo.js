


class OrgMemberRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        // async getOrgDetailByOrgnameAndUserId(orgName,userId){
        //     const query = `SELECT * FROM public.orginfo WHERE orgname = '${orgName} AND createdby = ${userId}';`;
        //     return this.postgresClient.query(query);
        // }
    
    
        async createOrgMember(orgId,userId,role){
            const query = `INSERT INTO public.orgmember ("userid","orgid","role") VALUES ('${userId}','${orgId}','${role}');`;
            return this.postgresClient.query(query);
        }

    }
    
    module.exports = OrgMemberRepo;