const express = require('express');
const taskRouter = express.Router();
const taskController = require("../controllers/taskcontroller");

taskRouter.post("/tasks", taskController.createTask);
taskRouter.get("/tasks", taskController.getAllTask);
taskRouter.patch("/tasks/:id" , taskController.updateTask);
taskRouter.delete("/tasks/:id" , taskController.deleteTask);

module.exports  = taskRouter;