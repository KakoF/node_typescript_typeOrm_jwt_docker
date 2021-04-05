import { User } from '../../domain/entities/User'

export interface IUsersRepository {
  save(user: User): Promise<User>
}
