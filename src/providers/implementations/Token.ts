import { IUserResponseDTO } from "../../useCases/User/CreateUser/dto/IUserCreateDTO";
import jwt from 'jsonwebtoken'
import { IToken } from "../IToken";

export class Token implements IToken {
    generateAccess(user: IUserResponseDTO): string {
        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWTSIGNATURE,
            { expiresIn: '1d' }
        )
        return token;
    }

}