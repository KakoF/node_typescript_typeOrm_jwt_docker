import { IUserResponseDTO } from "../useCases/User/CreateUser/dto/IUserCreateDTO";

export interface IToken {
    generateAccess(user: IUserResponseDTO): any
}