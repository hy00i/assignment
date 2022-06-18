const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Express Route Test', function () {
	 it('should return hello world', async () => {
	 	return request.get('/hello')
	 		.expect(200)
	 		.expect('Content-Type', /text/)
	 		.then(res => {
	 			expect(res.text).toBe('Hello BENR2423');
	 		});
	 })

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({username: 'Phanida', password: "86790" })
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual("login successful")
			});
	});

	it('login failed', async () => {
		return request
			.post('/login')
			.send({username: 'Phanida',password:"12345"})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("Fail to login")	
			});
	});

	it('register', async () => {
		return request
			.post('/register')
			.send({username: 'kuan',password:"345fr"})
			.expect('Content-Type', /text/)
			.expect(200).then(response => {
				expect(response.text).toEqual("user created");
	   		});
	});

	it('register failed', async () => {
		return request
			.post('/register')
			.send({username: 'Phanida',password:"12345"})
			.expect('Content-Type', /text/)
			.expect(404).then(response => {
				expect(response.text).toEqual("The Username is already exist ");
	   		});
	});
});

