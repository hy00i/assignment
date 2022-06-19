const ObjectId = require("mongodb").ObjectId;

let visitors;
class Visitor {
	static async injectDB(conn) {
		visitors = await conn.db("Visitor-management-System").collection("visitors")
	}

	static async getVisitor(visitorId) {
        let visitor = await visitors.findOne({ "id": id });
        if(visitor) {
            return visitors.find({"id": id}).toArray();
        }
        else {
            return null
        }
    }

	static async createVisitor(name, department, date ) {
		let visitor = await visitors.findOne({ "id": id });
		if (visitor) {
			return null;
		} else {
			await visitors.insertOne({ "name": name, "id": id, "phone": phone, "inputby": inputby, "date": date, "checkin": checkin});
		}
		return visitor = await visitors.findOne({ "id": id });
	}

	static async updateVisitor(visitorId, department) {
		let visitor = await visitors.findOne({ "id": id });
		if (visitor.inputby == inputby) {
			await visitors.updateOne({"id": id }, { $set: { "checkout": checkout } });
			return visitor = await visitors.findOne({ "id": id });
		} else {
			return null;
		}
	}

	static async deleteVisitor(visitorId) {
		let visitor = await visitors.findOne({ "id": id });
		if (visitor.inputby == inputby) {
			await visitors.deleteOne({ "id": id });
			return true;
		} else {
			return null;
		}
	}

	static async UsergetVisitors(inputby) {
		let visitor = await visitors.find({ "inputby": inputby }).toArray();
		if(visitor){
			return visitor;
		}
		else {
			return null
		}
	}

	static async getAllVisitors() {
        let visitor = await visitors.find({ }).toArray();
        if(visitor){
            return visitor;
        }
        else {
            return null
        }
	}
}

module.exports = Visitor;
