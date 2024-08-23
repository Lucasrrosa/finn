import { IRegistrarParamsDto } from '@finn/api-contracts'
import { IsEmail, IsString } from 'class-validator'
export class RegistrarParamsDto  implements IRegistrarParamsDto {
    @IsString()
    nomeUsuario: string

    @IsEmail()
    email: string


    @IsString()
    senha: string

}
