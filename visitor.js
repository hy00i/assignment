const ObjectId = require("mongodb").ObjectId;

let visitors;
class Visitor {
	static async injectDB(conn) {
		visitors = await conn.db("Visitor-management-System").collection("visitors")
	}

	static async getVisitor(visitorId) {
		return await visitors.findOne({ _id: new ObjectId(visitorId) })
    }

	static async createVisitor(name, department, date ) {
        // TODO - CREATE Visitors in DB
        return visitors.findOne({
            'name':name
        }).then(async visitor=>{
            if(visitor){
                if(visitor.name==name){
                    return "the name is already axist";
                }
            }else{
            await visitors.insertOne({
                "name":name,
                "department":department,
                "date":date,
            })
            return "visitor created";    
            }
        })
    }
	static async updateVisitor(visitorId, department) {
        // TODO - UPDATE Visitors in DB
        return visitors.findOne({
             _id: new ObjectId(visitorId) 
        }).then(async visitor =>{
            if(visitor._id=visitorId){
                await visitors.updateOne({
                    "department":department,
                })
                return "visitor info updated";    
            }else{
                return "invalid id";
            }
        })
    }

	static async deleteVisitor(visitorId) {
        // TODO - DELETE Visitors in DB
        return visitors.findOne({
            _id: new ObjectId(visitorId)
        }).then(async visitor =>{
            if(visitor._id=visitorId){
                await visitors.deleteOne({
                    _id: new ObjectId(visitorId)
                })
                return "Visitor id is succesfully deleted";    
            }else{
                return "invalid id";
            }
        })    
	}	
}

module.exports = Visitor;
