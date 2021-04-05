import { Request, Response, Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'
import AuthController from '../../presentation/controllers/AuthController'
import { creatUserController } from '../../presentation/controllers/User/CreateUserController'

const router = Router()
router.post('/users', (request: Request, response: Response) => {
  return creatUserController.store(request, response)
})
//creatUserController.store(request))
/*router.get('/users', authMiddleware, UserController.index)
router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)*/

export default router
