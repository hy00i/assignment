const ObjectId = require("mongodb").ObjectId;

let departments;
class Departmental {
	static async injectDB(conn) {
		departments = await conn.db("Visitor-management-System").collection("departments")
	}
	
	static async getdepartment() {
	// TODO: Get all departments details
		let department = await departments.findOne({});
		if(department){
			return departments;
		}
		else{
			return null
		}
	}

	static async createdepartment(code, department, floor) {
        // TODO: Check if code exists, if not, create new department
		let department =await departments.findOne({ "code": code});
		if(department){
			return null;
		}else{
			await departments.insertOne({"code":code,"department":department,"floor":floor});
		}
		return department =await department.findOne({"id":id});
	}	

    	static async deletedepartment(code) {
	// TODO: Check if code exists, if yes, delete department
		let department =await departments.findOne({"code":code});
		if(department){
			await departments.deleteOne({"code":code});
			return
		}else{
			return null;
		}
	}

	static async updatedepartmentid(code, id) {
        // TODO: Check if code exists, if yes, insert visitor id to department
		let department= await departments.findOne({"code":code});
		if(department){
		await departments.updateOne({"code":code},{$set: {"id": id}});
		return department =await departments.findOne({"code":code});
		}else{
			return null;
		}
	}

    	static async deletedepartmentid(code, id) {
        // TODO: Check if code exists, if yes, remove visitor id from department
		let department=await departments.findOne({"code":code});
		if(department){
			await departments.deleteOne({"code":code},{$unset:{"id":id}});
		}else{
			return null;
		}
	}
}

module.exports = Departmental;
