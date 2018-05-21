const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    
    var db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text:'Test'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Todos').deleteOne({text:'Test'}).then((result) => {
    //     console.log(result.result);
    // });

    db.collection('Todos').findOneAndDelete({completed:true}).then((result) => {
        console.log(result);
    });

    client.close();
});