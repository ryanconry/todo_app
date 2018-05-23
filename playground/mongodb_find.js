// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');      //es6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //mongodb:// is a protocol
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find();          //fetch all Todos, no filtering
  db.collection('Todos').find({completed: false})     //find documents with filter
  .toArray()                                          //returns documents as array
  .then((docs) => {                                  //promise returns docs correctly
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log(err);
  });
  //db.close();
});
