const bcrypt = require("bcryptjs")
let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("Visitor-management-System").collection("users")
	}

	static async register(Username, Password) {
		// TODO: Check if username exists
	    let user = await users.findOne({ "username": username });
		if (user) {
			return 'duplicate user name';
		} else {
		// TODO: Hash password
        const hashpassword = await bcrypt.hash(password, 10);
		// TODO: Save user to database
        await users.insertOne({"username": username, "password": hashpassword});
		return "user created";
		}
	}

	static async login(Username, Password) {
		return users.findOne({
			'username':Username
		}).then(async user=>{
			if(user){
				if(user.password==Password){
					return "login successful";
				}
				else{
					return "invalid password";
				}	
			}
			else{
				return "invalid username";
			}
			
		})

	}
}
 
module.exports= User;
