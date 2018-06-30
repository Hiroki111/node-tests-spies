const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy('Hiroki', 31);
		expect(spy).toHaveBeenCalledWith('Hiroki', 31);
	});

	it('should call saveUser with user object', () => {
		var email = 'blah@gmail.com';
		var password = "sample";
		app.handleSignup(email, password);
		expect(db.saveUser)
			.toHaveBeenCalledWith({
				email,
				password
			});
	});
});