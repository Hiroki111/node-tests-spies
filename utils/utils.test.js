const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			var res = utils.add(11, 33);
			expect(res).toBe(44).toBeA('number');
		});
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		})
	});

	it('should square a number', () => {
		var res = utils.square(7);
		expect(res).toBe(49).toBeA('number');
	});

	it('should async square two numbers', (done) => {
		utils.asyncSquare(3, (sum) => {
			expect(sum).toBe(9).toBeA('number');
			done();
		})
	});
});

it('should set first and last names', () => {
	var user = {
		age: 31,
		location: "Brisbane"
	};
	utils.setName(user, "John Smith");
	expect(user).toBeA('object').toInclude({
		firstName: "John",
		lastName: "Smith"
	});
})

it('should expect some values', () => {
	expect([12]).toEqual([12]);
	expect([12]).toNotEqual([1]);
	expect([1, 2, 3, 4, 5]).toInclude(3);
	expect([1, 2, 3, 4, 5]).toExclude(0);
	expect({
		name: "Hiroki",
		age: 31,
		location: "Brisbane"
	}).toInclude({
		age: 31
	});
})