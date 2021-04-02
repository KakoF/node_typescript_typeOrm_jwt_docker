import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../entities/User'
class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User)
    const { email, password } = req.body

    const user = await repository.findOne({ where: { email } })

    if (!user) res.sendStatus(401)

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) res.sendStatus(401)

    delete user.password

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWTSIGNATURE,
      { expiresIn: '1d' }
    )

    return res.json({ user, token })
  }
}

export default new AuthController()
