import express, { Router } from 'express'
import TransactionController from '../controllers/TransactionController.js'

const router = express.Router();

router.get('/transaction/:userId', TransactionController.getAllByUserId )

export { router as TransactionRoute };