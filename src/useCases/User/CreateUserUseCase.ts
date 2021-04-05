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
    const user = new User(email, password)
    const saveUser = await this._usersRepository.save(user)
    return saveUser
  }
}
