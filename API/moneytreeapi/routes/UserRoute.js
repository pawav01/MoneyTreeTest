import express, { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = express.Router();
    
router.get('/user/:userId', UserController.getUserById )

export { router as UserRoute };