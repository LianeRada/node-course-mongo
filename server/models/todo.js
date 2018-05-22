var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: null
    },
    completedAt: {
        type: Number,
        default: false
    }
});

module.exports = { Todo };