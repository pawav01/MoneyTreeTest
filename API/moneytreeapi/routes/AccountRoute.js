import express, { Router } from 'express'
import AccountController from '../controllers/AccountController.js'

const router = express.Router();

router.get('/users/:userId/accounts', AccountController.getAllByUserId);
router.get('/users/:userId/accounts/:accountId', AccountController.getById);

export { router as AccountRoute };