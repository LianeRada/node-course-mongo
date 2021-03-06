const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b0337e7c7214a16bcfea4fd')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});