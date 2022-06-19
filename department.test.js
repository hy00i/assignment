const MongoClient = require("mongodb").MongoClient;
const Departmental = require("./department")

describe("Department Info Management", () => {
	let client;
	beforeAll(async () => {
		client = await MongoClient.connect(
			"mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ljfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			{ useNewUrlParser: true },
		);
		Departmental.injectDB(client);
	})

	afterAll(async () => {
		await client.close();
	})

	test("Create department Successfully", async () => {
		const res = await Departmental.createdepartment("30","Neurology","C23");
        expect(res.code).toBe("30");
		expect(res.department).toBe("Neurology");
		expect(res.floor).toBe("C23");
	})

    test("Create department Failed", async () => {
        const res = await Departmental.createdepartment("none","none","C23");
        expect(res).toBe(null);
    })

    test("Insert id to department Successfully", async () => {
        const res = await Departmental.updatedepartmentid("10", "210220-01-8641");
        expect(res.code).toBe("10");
        expect(res.id).toBe("210220-01-8641");

    })

    test("Insert id to department Failed", async () => {
        const res = await Departmental.updatedepartmentid("none", "210220-01-8641");
        expect(res).toBe(null);
    })

    test("Remove id from department Successfully", async () => {
        const res = await Departmental.deletedepartmentid("10", "210220-01-8641");
        expect(res.code).toBe("10");
        expect(res.id).toBe("210220-01-8641");
    })

    test("Remove id from department Failed", async () => {
        const res = await Departmental.deletedepartmentid("none", "210220-01-8641");
        expect(res).toBe(null);
    })

    test("Delete department Successfully", async () => {
        const res = await Departmental.deletedepartment("01");
        expect(res).toBe(true);
    })

    test("Delete department Failed", async () => {
        const res = await Departmental.deletedepartment("test");
        expect(res).toBe(null);
    })

}); 
