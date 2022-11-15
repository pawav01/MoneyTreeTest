import express, { Router } from 'express'
import TaskController from '../controllers/TaskController.js'

const router = express.Router();

router.get('/users/:userId/tasks', TaskController.getAllByUserId);
router.get('/users/:userId/tasks/:taskId', TaskController.getById);

export { router as TaskRoute };