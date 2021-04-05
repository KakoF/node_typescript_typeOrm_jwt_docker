import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../../entities/User'
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
