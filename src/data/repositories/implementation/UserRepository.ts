import { getRepository } from 'typeorm'
import { User } from '../../../domain/entities/User'
import { IUsersRepository } from '../IUserRepository'

export class UserRepository implements IUsersRepository {
  async save(user: User): Promise<User> {
    const repository = getRepository(User)
    const storeUser = await repository.create(user)
    await repository.save(storeUser)
    return storeUser
  }
}
