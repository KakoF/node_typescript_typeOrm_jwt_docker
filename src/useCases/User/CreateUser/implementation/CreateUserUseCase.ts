import { IUsersRepository } from '../../../../data/repositories/IUserRepository'
import { User } from '../../../../domain/entities/User'
import { IUserRequestDTO, IUserResponseDTO } from '../dto/IUserCreateDTO'
import { ICreateUserUseCase } from '../ICreateUserUseCase'

export class CreateUserUseCase implements ICreateUserUseCase {
  private _usersRepository: IUsersRepository
  constructor(usersRepository: IUsersRepository) {
    this._usersRepository = usersRepository
  }

  async execute(data: IUserRequestDTO): Promise<IUserResponseDTO> {
    const { name, email, password } = data
    const userExist = await this._usersRepository.findByEmail(email)
    if (userExist) throw new Error('Usuário já está cadastrado')
    const user = new User(name, email, password)
    const saveUser = await this._usersRepository.save(user)
    const { password: omitted, ...userP } = saveUser;
    const userResponse = Object.assign({}, userP)
    return userResponse
  }
}
