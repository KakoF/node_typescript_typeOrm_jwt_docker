import { UserRepository } from '../../../../data/repositories/implementation/UserRepository'
import { CreateUserUseCase } from '../../../../useCases/User/CreateUser/implementation/CreateUserUseCase'
import { UserController } from './UserController'

const userRepository = new UserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)

const creatUserController = new UserController(createUserUseCase)

export { createUserUseCase, creatUserController }
