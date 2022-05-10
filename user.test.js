const MongoClient = require("mongodb").MongoClient;
const User = require("./user").default

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
		const res = await User.register("Phanida","86790")
		expect(res).toBe("user created")
	})

	test("Duplicate username", async () => {
		const res = await User.register("Phanida","86790")
		expect(res).toBe("the Username is already exist")
	})

	test("User login invalid username", async () => {
		const res = await User.login("Pahani","86790")
		expect(res).toBe("Invalid username")
	})

	test("User login invalid password", async () => {
		const res = await User.login("Phanida","09876")
		expect(res).toBe("invalid password")
	})

	test("User login successfully", async () => {
		const res = await User.login("Phanida,86790")
		expect(res).toBe("login succesful")
	})
});