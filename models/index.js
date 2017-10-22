const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api', {
  useMongoClient: true
})
.catch(err => {
  console.error('Mongoose Error', err.stack);
  process.exit(1);
})


module.exports.Todo = require('./todo');