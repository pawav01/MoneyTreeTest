import express, { Router } from 'express'
import CategoryController from '../controllers/CategoryController.js'

const router = express.Router();

router.get('/users/:userId/categories', CategoryController.getAllByUserId);
router.get('/users/:userId/categories/:categoryId', CategoryController.getById);

export { router as CategoryRoute };