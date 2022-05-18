const MongoClient = require("mongodb").MongoClient;
const User = require("./user");

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
})

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.send('Hello World')
})

app.get('/hello', (req, res) => {
	res.send('Hello BENR2423')
})

app.post('/login', async (req, res) => {
	console.log(req.body);

	const user = await User.login(req.body.username, req.body.password);
        if (user == "invalid password" || user == "invalid username")
	{
            return res.status(404).send("Fail to login")
        }
        else{
            return res.status(200).send("login successful")
        }
})

app.post('/register', async (req, res) => {
	console.log(req.body);

	const user = await User.register(req.body.username, req.body.password)
        if (user == "the Username is already exist"){
            return res.status(404).send("The Username is already exist ")
        }
        return res.status(200).send("user created")
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
