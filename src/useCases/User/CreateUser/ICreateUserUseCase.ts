import { User } from "../../../domain/entities/User";
import { IUserCreateDTO } from "./dto/IUserCreateDTO";

export interface ICreateUserUseCase {

    execute(data: IUserCreateDTO): Promise<User>
}