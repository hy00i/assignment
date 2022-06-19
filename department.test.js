const MongoClient = require("mongodb").MongoClient;
const Departmental = require("./department")

describe("Department Info Management", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
             //"my-mongodb+srv-connection-string",
			{ useNewUrlParser: true },
		);
		Departmental.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test("Create department Successfully", async () => {
		const res = await Departmental.createdepartment("test","testing","A24");
	})

    test("Create department Failed", async () => {
        const res = await Departmental.createdepartment("test","testing","A24");
    })

    test("Insert id to department Successfully", async () => {
        const res = await Departmental.updatedepartmentid("test", "000000-00-0000");
    })

    test("Insert id to department Failed", async () => {
        const res = await Departmental.updatedepartmentid("none", "000000-00-0000");
    })

    test("Remove id from department Successfully", async () => {
        const res = await Departmental.deletedepartmentid("test", "000000-00-0000");
    })

    test("Remove id from department Failed", async () => {
        const res = await Departmental.deletedepartmentid("none", "000000-00-0000");
    })

    test("Delete department Successfully", async () => {
        const res = await Departmental.deletedepartment("test");
    })

    test("Delete department Failed", async () => {
        const res = await Departmental.deletedepartment("test");
    })

}); 