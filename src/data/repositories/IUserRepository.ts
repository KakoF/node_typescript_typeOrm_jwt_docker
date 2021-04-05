import { User } from '../../domain/entities/User'

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>
  save(user: User): Promise<User>
}
