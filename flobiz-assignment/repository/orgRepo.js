


class OrgRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getOrgDetailByOrgName(orgName){
            const query = `SELECT * FROM public.org WHERE orgname = '${orgName}';`;
            return this.postgresClient.query(query);
        }

        async getOrgDetailByOrgId(orgId){
            const query = `SELECT * FROM public.org WHERE orgid = '${orgId}';`;
            return this.postgresClient.query(query);
        }
    
    
        async createOrg(orgName,userId){
            const query = `INSERT INTO public.org ("createdby","orgname") VALUES ('${userId}','${orgName}');`;
            return this.postgresClient.query(query);
        } 

    }
    
    module.exports = OrgRepo;