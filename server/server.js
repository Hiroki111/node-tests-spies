const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: "Not found",
		name: "Todo App v1.0"
	});
});

var userA = {
	age: 10,
	name: "Tom"
};
var userB = {
	age: 15,
	name: "John"
};
var userC = {
	age: 18,
	name: "Bob"
};

app.get('/users', (req, res) => {
	res.status(200).send([userA, userB, userC]);
});

app.listen(3000);
module.exports.app = app;