const MongoClient = require("mongodb").MongoClient;
const User = require("./user")

describe("User Account", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ljfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		User.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test("New user registration", async () => {
		const res = await User.register("Potato","mk123")
		expect(res).toBe("user created")
	})

	test("Duplicate username", async () => {
		const res = await User.register("Phanida","ph872")
		expect(res).toBe("the Username is already exist")
	})

	test("User login invalid username", async () => {
		const res = await User.login("Diena","86790")
		expect(res).toBe("invalid username")
	})

	test("User login invalid password", async () => {
		const res = await User.login("Phanida","8679")
		expect(res).toBe("invalid password")
	})

	test("User login successfully", async () => {
		const res = await User.login("Phanida","86790")
		expect(res).toBe("login successful")
	})
});