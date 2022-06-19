# BENR 2423 Database and Cloud System
Group assignment <br />
Visitor Management System in Hospital

## Group 10 Members
1. NURUL FARINA BINTI MOHD NAZLI
2. OOI HAN YI
3. PHANIDA PHONSUVAN A/P CHAI CHANAK

## Use-Case Diagram
The diagram below show the Use-Case diagram for this Hospital VMS.
![Use-Case Diagram](https://github.com/OoiHanYi/assignment/blob/master/Diagram/Use-Case%20Diagram.png)

* There are four character in this Use-Case Diagram.
* 🧑‍⚕️ Admin can do the CRUD operation for the role of admin, user, and security. Admin also can view all the visitor's information and department's details.
* 👨‍💻 User as Hospital Employee can do the CRUD operation for the visitor. User also can view all the visitor's information that created by him/her self.
* 🙋‍♂️ Visitor of the Hospital can view him/her self visitor's information by the visitor ID.
* 👮‍♂️ Security guard can view all the visitor's information to make sure the visitor has booking for that day.

## Entity Relationship Diagram
The diagram below show the Entity Relationship Diagram that contains the Database Modelling with Crow’s Foot Notation.
![Entity Relationship Diagram](https://github.com/OoiHanYi/assignment/blob/master/Diagram/Entity%20Relationship%20Diagram.png)

* There are total three collections named User, Visitor, and Department in the database named vms.
* The Visitor collection has a key field named inputby will contained the username of the User collection.
* The Department collection has a key field named visitors will contained the id of the Visitor collection.

## Heroku link that Host the RESTful API on the cloud
https://www.youtube.com/watch?v=dQw4w9WgXcQ