let users;
class User {
	static async injectDB(conn) {
		users = await conn.db("my-database-name").collection("users")
	}

	static async register(username, password) {
		// TODO: Check if username exists

		// TODO: Hash password

		// TODO: Save user to database
     

	static async login(username, password) {
		// TODO: Check if username exists
		let user = await users.findOne({ "username": username });
		// TODO: Validate password
		if (user) {
			const verified = await bcrypt.compare(password,user.Password)
			if (verified)
			{
		// TODO: Return user object
				return user
			}
			else{
				return "The password is invalid"
			}
		}
		else{
			return "Username is invalid"
		}
	}
}
 
module.exports= User;