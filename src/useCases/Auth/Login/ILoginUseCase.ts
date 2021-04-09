import { User } from "../../../domain/entities/User";
import { IUserLoginDTO } from "./dto/IUserLoginDTO";

export interface ILoginUseCase {

    get(user: IUserLoginDTO): Promise<any>

}