const todo = require("../models/todo")
const asyncHandler = require("express-async-handler")

exports.getAllTodos = async (req, res) =>{
    const result = await todo.find()
    res.json({message: "Todo Fetch Success", result})
}

exports.addTodo = async (req, res) =>{
    await todo.create(req.body)
    res.json({message: "Todo Add Success"})
}
exports.updateTodo = async (req, res) =>{
    await todo.findByIdAndUpdate(req.params.id ,req.body)
    res.json({message: "Todo Update Success"})
}
exports.deleteTodo = async (req, res) =>{
    await todo.findByIdAndDelete(req.params.id)
    res.json({message: "Todo Delete Success"})
}