const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Express Route Test', function () {
	// it('should return hello world', async () => {
	// 	return request.get('/hello')
	// 		.expect(200)
	// 		.expect('Content-Type', /text/)
	// 		.then(res => {
	// 			expect(res.text).toBe('Hello BENR2423');
	// 		});
	// })

	it('login successfully', async () => {
		return request
			.post('/login')
			.send({username: 'user1', password: "123456" })
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
						// _id: expect.any(String),
						// name: expect.any(String),
						// age: expect.any(Number),
					})
				);
			});
	});

	it('login failed', async () => {
		//TODO when login is failed, it should return error message
	})

	it('register', async () => {
		//TODO when register is successful, it should return success message
	});

	it('register failed', async () => {
		//TODO when register is failed, it should return error message
	})
});