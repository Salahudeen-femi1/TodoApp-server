import express from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controller/controller.js";

const todoRouter = express.Router()
todoRouter.post('/create', createTask)
todoRouter.get('/', getTask)
todoRouter.patch('/updateTask', updateTask)
todoRouter.patch('/deleteTask', deleteTask)


export default todoRouter