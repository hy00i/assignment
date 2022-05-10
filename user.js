let users;

class User {
	static async injectDB(conn) {
		users = await conn.db("my-database-name").collection("users")
	}

	static async register(username, password) {
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

	static async login(username, password) {
		// TODO: Check if username exists

		// TODO: Validate password

		// TODO: Return user object
		return;
	}
}

module.exports = User;
