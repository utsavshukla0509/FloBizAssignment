


class OrgRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getOrgDetailByOrgNameAndUserId(orgName,userId){
            const query = `SELECT * FROM public.orginfo WHERE orgname = '${orgName}' AND createdby = '${userId}';`;
            return this.postgresClient.query(query);
        }
    
    
        async createOrg(orgName,userId){
            const query = `INSERT INTO public.orginfo ("createdby","orgname") VALUES ('${userId}','${orgName}');`;
            return this.postgresClient.query(query);
        } 

    }
    
    module.exports = OrgRepo;