// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');      //es6 object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {  //mongodb:// is a protocol
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate(filter,update,options,callback)
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b0b109f05a54a0cd0796995')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b08207c6de4011ad87124ac')
  }, {
    $set: {
      name: 'Ryan'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
