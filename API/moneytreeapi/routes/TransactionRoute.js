import express, { Router } from 'express'
import TransactionController from '../controllers/TransactionController.js'

const router = express.Router();

router.get('/users/:userId/transactions', TransactionController.getAllByUserId);
router.get('/users/:userId/transactions/:transactionId', TransactionController.getById);

export { router as TransactionRoute };