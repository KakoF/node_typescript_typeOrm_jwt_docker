import { UserRepository } from "../../../../data/repositories/implementation/UserRepository"
import { Token } from "../../../../providers/implementations/Token"
import { LoginUseCase } from "../../../../useCases/Auth/Login/implementation/LoginUseCase"
import { LoginController } from "./LoginController"


const userRepository = new UserRepository()
const tokenService = new Token()
const loginUseCase = new LoginUseCase(userRepository, tokenService)

const creatLoginController = new LoginController(loginUseCase)

export { loginUseCase, creatLoginController }
