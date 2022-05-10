const bcrypt = require("bcryptjs")
let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("Visitor-management-System").collection("users")
	}

	static async register(Username, Password) {
		// TODO: Check if username exists


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