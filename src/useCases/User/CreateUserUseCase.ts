import { IUsersRepository } from '../../data/repositories/IUserRepository'
import { User } from '../../domain/entities/User'
import { IUserCreateDTO } from './IUserCreateDTO'

export class CreateUserUseCase {
  private _usersRepository: IUsersRepository
  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository
  }

  async execute(data: IUserCreateDTO): Promise<User> {
    const { email, password } = data
    const userExist = await this._usersRepository.findByEmail(email)
    if (userExist) throw new Error('Usuário já está cadastrado')
    const user = new User(email, password)
    const saveUser = await this._usersRepository.save(user)
    return saveUser
  }
}
