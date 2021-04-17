


class UserRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getUserDetailByEmail(email){
            const query = `SELECT * FROM public.user WHERE email = '${email}';`;
            return this.postgresClient.query(query);
        }

        async getUserDetailByPhoneNo(phoneNo){
            const query = `SELECT * FROM public.user WHERE phoneno = '${phoneNo}';`;
            return this.postgresClient.query(query);
        }
    
    
        async createUser(username,email,phoneNo){
            const query = `INSERT INTO public.user ("username","email","phoneno") VALUES ('${username}','${email}','${phoneNo}');`;
            return this.postgresClient.query(query);
        }

    }
    
    module.exports = UserRepo;