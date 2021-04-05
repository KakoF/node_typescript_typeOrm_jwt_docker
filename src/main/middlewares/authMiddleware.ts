import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
interface tokenPayload {
  id: String
  iat: Number
  exp: Number
}
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if (!authorization) return res.sendStatus(401)

  const token = authorization.replace('Bearer', '').trim()
  try {
    const data = jwt.verify(token, process.env.JWTSIGNATURE)
    const { id } = data as tokenPayload
    req.userId = id
    return next()
  } catch {
    return res.sendStatus(401)
  }
}
