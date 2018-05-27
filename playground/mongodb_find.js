// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');      //es6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //mongodb:// is a protocol
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find();                 //fetch all Todos, no filtering
  // db.collection('Todos').find({
  // //  _id: '5b081c7da9ca2c23503d997b'                 //wont work, value is not string
  //   _id: new ObjectID('5b081c7da9ca2c23503d997b')     //will work, value is of type ObjectID()
  // })                                                  //find documents with filter
  // .toArray()                                          //returns documents as array
  // .then((docs) => {                                  //promise returns docs correctly
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log(err);
  // });

  // db.collection('Todos').find()                      //find all documents
  // .count()                                           //count all documents
  // .then((count) => {                                 //handle count with promises
  //   console.log(`Todos count: ${count}`);
  // },(err) => {
  //   console.log(err);
  // });

  db.collection('Users').find({
    name: 'Jen'
  })
  .count()
  .then((count)=>{
    console.log(`Number of entries with that name: ${count}`);
  },(err) => {
    console.log(err);
  });

  //db.close();
});
