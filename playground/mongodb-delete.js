// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MondoDB server');
	}
	
	console.log('Connected to MongoDB server`');

	//deleteMany
/* 	db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
		console.log(result);
	});
 */	
	//deleteOne
/* 	db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
		console.log(result);
	});
 */	
	
/* 	//findOneAndDelete - delete and returns the object
	db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
		console.log(result);
	});
 */		
/* 	db.collection('Users').deleteMany({name:'Shafik'}).then((result)=>{
		console.log(result);
	});
  */
	
	db.collection('Users').findOneAndDelete({"_id": new ObjectId("59c7f05526ce7e22257b69a6")}).then((result)=>{
		console.log(result);
	});


	
		
	// db.close();	
	
});