const { OBjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findByIdAndRemove(id).then((todo) => {
    console.log(todo);
});