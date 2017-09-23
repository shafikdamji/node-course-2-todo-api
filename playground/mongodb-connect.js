// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, OnjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MondoDB server');
	}
	
	console.log('Connected to MongoDB server`');

/*	
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (error, result) => {
		if (err) {
			return console.log('Unable to insert todo');
		}
		
		console.log(JSON.stringify(result.ops, undefined, 2));
	})	
*/		
	db.collection('Users').insertOne({
		name: 'Shafik',
		age: 44,
		location: 'Unionville'
	}, (error, result) => {
		if (err) {
			return console.log('Unable to insert users');
		}
		
		console.log(JSON.stringify(result.ops, undefined, 2));
	})	
		
		
		
		
		
		
	db.close();	
	
});