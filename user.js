let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("Visitor-management-System").collection("users")
	}

	static async register(username, password) {
		// TODO: Check if username exists
		return users.findOne({
			'username':username
		}).then(async user=>{
			if (user) {
				if(user.username==username){
					return "the Username is already exist";
				}
				
			} else {

			await users.insertOne({
				"username": username, 
				"password": password,
			})
			return "user created";
			}
		})

	}

	static async login(username, password) {
		return users.findOne({
			'username':username
		}).then(async user=>{
			if(user){
				if(user.password!=password){
					return "invalid password";
				}
				else{
					return "login successful";
				}	
			}
			else{
				return "invalid username";
			}
			
		})

	}
}
 
module.exports= User;