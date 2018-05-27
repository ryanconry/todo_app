// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');      //es6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //mongodb:// is a protocol
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Todo3'}).then((result)=>{
  //   console.log(`The number of documents deleted: ${result.result.n}`);
  // });

  // db.collection('Users').deleteMany({name: 'Ryan'}).then((result)=>{
  //   console.log(`Number of documents deleted: ${result.result.n}`);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Todo3'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b0820875e3c5b0d34c3ecd0')
  }).then((result) => {
    console.log(result);
  });


  //db.close();
});
