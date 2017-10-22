const db = require('../models');

exports.getTodos = async (req, res) => {
  try {
    const todos = await db.Todo.find();
    res.json(todos);
  } catch (err) {
    console.error(err);
  }
}

exports.createTodo = async (req, res) => {
  try {
    const todo = await db.Todo.create(req.body);
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
  }
}

exports.getTodo = async (req, res) => {
  try {
    const todo = await db.Todo.findById(req.params.todoId);
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
  }
}

exports.updateTodo = async (req, res) => {
  try {
    const todo = await db.Todo.findOneAndUpdate(
      { _id: req.params.todoId },
      req.body,
      { new: true }
    );
    res.status(200).json(todo);
  } catch (err) {
    console.error(err);
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await db.Todo.remove({_id: req.params.todoId});
    res.json({message: 'Deleted'});
  } catch (err) { console.error(err)}
}

module.exports = exports;