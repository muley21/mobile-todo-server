const router = require("express").Router()
const todoController = require("../controller/todo.controller")

router
    .get("/",todoController.getAllTodos)
    .post("/",todoController.addTodo)
    .put("/:id",todoController.updateTodo)
    .delete("/:id",todoController.deleteTodo)

module.exports = router