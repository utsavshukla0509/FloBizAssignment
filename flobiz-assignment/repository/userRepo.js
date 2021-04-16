


class UserRepo {

    constructor(postgresClient) {
        this.postgresClient = postgresClient;
    }

        async getUserDetailByEmail(email){
            const query = `SELECT * FROM public.userinfo WHERE email = '${email}';`;
            return this.postgresClient.query(query);
        }

        async getUserDetailByPhoneNo(phoneNo){
            const query = `SELECT * FROM public.userinfo WHERE phoneno = '${phoneNo}';`;
            return this.postgresClient.query(query);
        }
    
    
        async createUser(username,email,phoneNo){
            const query = `INSERT INTO public.userinfo ("username","email","phoneno") VALUES ('${username}','${email}','${phoneNo}');`;
            return this.postgresClient.query(query);
        }

    }
    
    module.exports = UserRepo;