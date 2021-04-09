import { IUsersRepository } from "../../../../data/repositories/IUserRepository";
import bcrypt from 'bcryptjs'
import { IToken } from "../../../../providers/IToken";
import { IUserLoginDTO } from "../dto/IUserLoginDTO";
import { ILoginUseCase } from "../ILoginUseCase";

export class LoginUseCase implements ILoginUseCase {
    private _repository: IUsersRepository
    private readonly _serviceToken: IToken
    constructor(repository: IUsersRepository, serviceToken: IToken) {
        this._repository = repository
        this._serviceToken = serviceToken
    }
    async get(userDto: IUserLoginDTO): Promise<any> {
        const data = await this._repository.findByEmail(userDto.email)
        if (!data) throw new Error('Usuário inválido')
        const isValidPassword = await bcrypt.compare(userDto.password, data.password)
        if (!isValidPassword) throw new Error('Senha inválida')
        const { password, ...user } = data
        //return Object.assign({}, collectionWithoutId, { id: _id })*/
        //const user = Object.assign({}, data)
        var token = await this._serviceToken.generateAccess({ id: user.id, name: user.name, email: user.email })
        return { user, token }
    }


}