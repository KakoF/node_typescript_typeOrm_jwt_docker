import { IUserRequestDTO, IUserResponseDTO } from "./dto/IUserCreateDTO";

export interface ICreateUserUseCase {

    execute(data: IUserRequestDTO): Promise<IUserResponseDTO>
}