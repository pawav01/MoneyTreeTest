import express, { Router } from 'express'
import CategoryController from '../controllers/CategoryController.js'

const router = express.Router();

router.get('/users/:userId/categories', CategoryController.getAllByUserId);
router.get('/users/:userId/categories/:categoryId', CategoryController.getById);
router.post('/users/:userId/categories', CategoryController.createNewCategory)
router.delete('/users/:userId/categories/:categoryId', CategoryController.deleteCategory)
router.put('/users/:userId/categories/:categoryId', CategoryController.updateCategory)

export { router as CategoryRoute };