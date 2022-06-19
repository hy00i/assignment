const MongoClient = require("mongodb").MongoClient;
const User = require("./user");
const Visitor = require("./visitor");
const Departmental = require("./department");

MongoClient.connect(
	// TODO: Connection 
	"my-mongodb+srv-connection-string",
	{ useNewUrlParser: true },
).catch(err => {
	console.error(err.stack)
	process.exit(1)
}).then(async client => {
	console.log('Connected to MongoDB');
	User.injectDB(client);
	Visitor.injectDB(client);
	Departmental.injectDB(client);
})

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/hello', (req, res) => {
	res.send('Hello BENR2423')
})

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id: 
 *           type: string
 *         username: 
 *           type: string
 *         email: 
 *           type: string
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: User Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: 
 *             type: object
 *             properties:
 *               username: 
 *                 type: string
 *               password: 
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Invalid username or password
 */

app.post('/adminlogin',async (req, res) => {
	const admin = await User.login(req.body.username, req.body.password);
	if (admin != null) {
		if (admin.role == "admin") {
			return res.status(200).json(admin)
		} else {
			return res.status(403)(  "Access denied" );
		}
	} else {
			return res.status(401)(  "Fail to login" );
	}
})

app.post('/userlogin',async (req, res) => {
	const user = await User.login(req.body.username, req.body.password);
	if (user != null) {
		if (user.role == "user") {
			return res.status(200).json(user)
		} else {
			return res.status(403).json( "Access denied" );
		}
	} else {
			return res.status(401).json( "Fail to login"  );
	}
})

 app.post('/securitylogin',async (req, res) => {
	const security = await User.login(req.body.username, req.body.password);
	if (security != null) {
		if (security.role == "security") {
			return res.status(200).json(security)
		} else {
			return res.status(403).json(   "Access denied" );
		}
	} else {
			return res.status(401).json( "Fail to login"  );
	}
})

 app.get('/visitors/:id', async (req, res) => {
	const {id} = req.params;
	const visitor = await Visitor.getVisitor(id);
	if (visitor != null ) {
		return res.status(200).json(id)
	} else {
		return res.status(404).send("Id is already exist");
	}
})

/**
 * @swagger
 * /visitor/{id}:
 *   get:
 *     description: Get visitor by id
 *     parameters:
 *       - in: path
 *         name: id 
 *         schema: 
 *           type: string
 *         required: true
 *         description: visitor id
 */

app.get('/visitor/:id', async (req, res) => {
	console.log(req.params.id);

	res.status(200).json({})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
