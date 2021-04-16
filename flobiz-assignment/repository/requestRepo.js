


class RequestRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getUserRequestDetailByUserIdAndOrgId(userId,orgId){
            const query = `SELECT * FROM public.request WHERE orgid = '${orgId}' AND userid = '${userId}';`;
            return this.postgresClient.query(query);
        }
    
    
        async create(userId,orgId){
            const query = `INSERT INTO public.request ("orgid","userid") VALUES ('${orgId}','${userId}');`;
            return this.postgresClient.query(query);
        } 

    }
    
    module.exports = RequestRepo;