import express, { Router } from 'express'
import TaskController from '../controllers/TaskController.js'

const router = express.Router();

router.get('/users/:userId/tasks', TaskController.getAllByUserId);
router.get('/users/:userId/tasks/:taskId', TaskController.getById);
router.post('/users/:userId/tasks', TaskController.createNewTask)
router.delete('/users/:userId/tasks/:taskId', TaskController.deleteTask)
router.put('/users/:userId/tasks/:taskId', TaskController.updateTask)

export { router as TaskRoute };