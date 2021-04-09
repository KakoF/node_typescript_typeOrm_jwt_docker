import { Request, Response } from 'express'
import { ICreateUserUseCase } from '../../../../useCases/User/CreateUser/ICreateUserUseCase'
export class UserController {
  private _createUseCase: ICreateUserUseCase
  constructor(createUseCase: ICreateUserUseCase) {
    this._createUseCase = createUseCase
  }
  async store(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    try {
      const user = await this._createUseCase.execute({ email, password })
      return res.json(user)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      })
    }
  }
}
