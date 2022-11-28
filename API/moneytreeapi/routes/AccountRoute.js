import express, { Router } from 'express'
import AccountController from '../controllers/AccountController.js'

const router = express.Router();

router.get('/users/:userId/accounts', AccountController.getAllByUserId);
router.get('/users/:userId/accounts/:accountId', AccountController.getById);
router.post('/users/:userId/accounts', AccountController.createNewAccount)
router.delete('/users/:userId/accounts/:accountId', AccountController.deleteAccount)
router.put('/users/:userId/accounts/:accountId', AccountController.updateAccount)

export { router as AccountRoute };