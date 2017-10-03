const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*

var id = '59d29dc5b66432c827efa597e';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
};

*/
/*
Todo.find({
	_id: id
}).then((todos) => {
	
	console.log('Todos', todos);
});


Todo.findOne({
	_id: id
}).then((todo) => {
	
	console.log('Todo', todo);
});
*/
/*
Todo.findById(id).then((todo) => {
	if (!todo) {
		console.log('ID not found');
		return;
	};
	
	console.log('Todo by ID', todo);
}).catch((e) => console.log(e)); 

*/

var id = '59ce942a0a8c0d5c115fd32c';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
};

User.findById(id).then((user) => {
	if (!user) {
		console.log('User not found');
		return;
	};
	
	console.log('User found', user);
}).catch((e) => console.log(e)); 

