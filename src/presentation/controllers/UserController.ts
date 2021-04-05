import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../../domain/entities/User'
class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User)
    const { email, password } = req.body

    const userExist = await repository.findOne({ where: { email } })
    if (userExist) res.sendStatus(409)

    const user = repository.create({ email, password })
    await repository.save(user)
    return res.json(user)
  }
  async index(req: Request, res: Response) {
    const repository = getRepository(User)
    const users = await repository.find()
    return res.json({ ID: req.userId, users: users })
  }
  async init(req: Request, res: Response) {
    return res.send('ok')
  }
}

export default new UserController()

/*import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { User } from '../../domain/entities/User'
import { CreateUserUseCase } from '../../useCases/User/CreateUserUseCase'
class UserController {
  private _createUseCase: CreateUserUseCase
  constructor(createUseCase: CreateUserUseCase) {
    this._createUseCase = createUseCase
  }
  async store(req: Request, res: Response) {
   
    const { email, password } = req.body
    const user = this._createUseCase.execute({ email, password })
    return res.json(user)
  }
  async index(req: Request, res: Response) {
    const repository = getRepository(User)
    const users = await repository.find()
    return res.json({ ID: req.userId, users: users })
  }
  async init(req: Request, res: Response) {
    return res.send('ok')
  }
}

export default new UserController()*/
