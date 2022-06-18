const MongoClient = require("mongodb").MongoClient;
const Visitor = require("./visitor")

describe("Visitor Info Management", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ljfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		Visitor.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test("Find visitor by Id", async () => {
		const res = await Visitor.getVisitor("62adc57fb2698583e54bbc7c");
		expect(res._id.toString()).toBe("62adc57fb2698583e54bbc7c");
	})

	test("Create visitor", async () => {
		const res = await Visitor.createVisitor("Susana","Urology","2 December 2022")
		expect(res).toBe("visitor created")
	})

	test("updated visitor", async () => {
		const res = await Visitor.updateVisitor("62adc57fb2698583e54bbc7c","Radiology");
		expect(res).toBe("visitor info updated")
	})

	test("delete visitor", async () => {
		const res = await Visitor.deleteVisitor("62adea9f7a044d512fc9f09c")
		expect(res).toBe("Visitor id is succesfully deleted")
	})

	test("invalid id", async () => {
		const res = await Visitor.updateVisitor("000de7bdd36e2255373ac0b4")
		expect(res).toBe("invalid id")
	})

	test("Duplicate name", async () => {
		const res = await Visitor.createVisitor("Meng")
		expect(res).toBe("the name is already axist")
	})

});