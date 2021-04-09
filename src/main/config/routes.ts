import { Request, Response, Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'
import { creatUserController } from '../../presentation/controllers/User/CreateUserController'
import { creatLoginController } from '../../presentation/controllers/Auth/LoginController'

const router = Router()
router.post('/users', (request: Request, response: Response) => {
  return creatUserController.store(request, response)
})
router.post('/auth', (request: Request, response: Response) => {
  return creatLoginController.authenticate(request, response)
})
//creatUserController.store(request))
/*router.get('/users', authMiddleware, UserController.index)
router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)*/

export default router
