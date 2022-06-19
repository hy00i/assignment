const ObjectId = require("mongodb").ObjectId;

let departments;
class Departmental {
	static async injectDB(conn) {
		departments = await conn.db("my-database-name").collection("departments")
	}

	static async getdepartment() {
        // TOFO: Get all departments details
	}

	static async createdepartment(code, department, floor) {
        // TODO: Check if code exists, if not, create new department
	}

    static async deletedepartment(code) {
        // TODO: Check if code exists, if yes, delete department
	}

	static async updatedepartmentid(code, visitors) {
        // TODO: Check if code exists, if yes, insert visitor id to department
	}

    static async deletedepartmentid(code, visitors) {
        // tODO: Check if code exists, if yes, remove visitor id from department
	}
}

module.exports = Departmental;