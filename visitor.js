const ObjectId = require("mongodb").ObjectId;

let visitors;
class Visitor {
	static async injectDB(conn) {
		visitors = await conn.db("vms").collection("visitors")
	}

	static async getVisitor(id) {
        // TODO - READ Visitors from DB
	}

	static async createVisitor(name, id, department, date, input) {
        // TODO - CREATE Visitors in DB
	}

	static async updateVisitor(id, department) {
        // TODO - UPDATE Visitors in DB
	}

	static async deleteVisitor(id) {
        // TODO - DELETE Visitors in DB
	}
	
}

module.exports = Visitor;