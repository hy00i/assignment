const ObjectId = require("mongodb").ObjectId;

let visitors;
class Visitor {
	static async injectDB(conn) {
		visitors = await conn.db("Visitor-management-System").collection("visitors")
	}

	static async getVisitor(visitorId) {
        // TODO - READ Visitors from DB
		return await visitors.findOne({ _id: new ObjectId(visitorId) })
	}
    
	static async createVisitor(name, department, date, ) {
        // TODO - CREATE Visitors in DB
        await visitors.insertOne({
            "name":name,
            "department":department,
            "date":date,
        })

	}

	static async updateVisitor(_id, department) {
        // TODO - UPDATE Visitors in DB
        await visitors.updateOne(
            {_id:ObjectId},
            {
                $set:{
                    "department":department
                }
            }
        )
	}

	static async deleteVisitor(id) {
        // TODO - DELETE Visitors in DB
        await visitors.deleteOne({
            "_id":ObjectId
        })
	}
	
}

module.exports = Visitor;
