import { Router } from 'express'
import authMiddleware from '../middlewares/authMiddleware'
import AuthController from '../presentation/controllers/AuthController'
import UserController from '../presentation/controllers/UserController'

const router = Router()
router.get('/', UserController.init)
router.get('/users', authMiddleware, UserController.index)
router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)

export default router
