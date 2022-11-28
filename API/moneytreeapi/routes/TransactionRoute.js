import express, { Router } from 'express'
import TransactionController from '../controllers/TransactionController.js'

const router = express.Router();

router.get('/users/:userId/transactions', TransactionController.getAllByUserId);
router.get('/users/:userId/transactions/:transactionId', TransactionController.getById);
router.post('/users/:userId/transactions', TransactionController.createNewTransaction)
router.delete('/users/:userId/transactions/:transactionId', TransactionController.deleteTransaction)
router.put('/users/:userId/transactions/:transactionId', TransactionController.updateTransaction)

export { router as TransactionRoute };