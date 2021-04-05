import { getRepository } from 'typeorm'
import { User } from '../../../domain/entities/User'
import { IUsersRepository } from '../IUserRepository'

export class UserRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User> {
    const repository = getRepository(User)
    const user = await repository.findOne({ where: { email } })
    return user
  }
  async save(user: User): Promise<User> {
    const repository = getRepository(User)
    const storeUser = await repository.create(user)
    await repository.save(storeUser)
    return storeUser
  }
}
