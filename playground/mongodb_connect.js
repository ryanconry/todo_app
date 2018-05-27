// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');      //es6 object destructuring

// var obj = new ObjectID();         //how to generate document objectID on the fly
// console.log(obj)

//for MongoDB, no need to create /ToDoApp, can just start using it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //mongodb:// is a protocol
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').insertOne({    //inertOne adds document to collection
    text: 'Todo3',            //object to insert as document
    completed: false
  }, (err,result) => {    //callback to handle (un)success of insert
    if(err){
      return console.log('Unable to insert something to do');
    }
    console.log(JSON.stringify(result.ops,undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Ryan',
  //   age: 27,
  //   location: 'Hamilton'
  // },(err,result) => {
  //   if(err){
  //     return console.log('There was an error adding a user')
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2))
  // });

  db.close();
});
