const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return Hello wolrd response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((res) => {
					expect(res.body).toInclude({
						error: "Not found",
						name: "Todo App v1.0"
					});
				})
				.end(done);
		});
	});
	describe('GET /users', () => {
		it('should return the 3 users', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body)
						.toInclude({
							age: 10,
							name: "Tom"
						}).toInclude({
							age: 15,
							name: "John"
						}).toInclude({
							age: 18,
							name: "Bob"
						});
				})
				.end(done);
		});
	});
});