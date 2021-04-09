import { Request, response, Response } from 'express'
import { ILoginUseCase } from '../../../../useCases/Auth/Login/ILoginUseCase'
import { IToken } from '../../../../providers/IToken'
export class LoginController {

  private readonly _service: ILoginUseCase
  constructor(service: ILoginUseCase) {
    this._service = service

  }
  async authenticate(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const response = await this._service.get({ email, password })
      return res.json(response)
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.',
      })
    }
  }
}
