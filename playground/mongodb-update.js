// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MondoDB server');
	}
	
	console.log('Connected to MongoDB server`');

/* 	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectId('59c7ede226ce7e22257b68ab')
	},{
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
		}).then((result)=>{
			console.log(result);
			
		});
 */

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectId('59861c8b3624ce4524d2cdae')
	},{
		$set: {
			name: 'Shafik'
		},
		$inc: {age:20 }
	}, {
		returnOriginal: false
		}).then((result)=>{
			console.log(result);
			
		});


		
	// db.close();	
	
});