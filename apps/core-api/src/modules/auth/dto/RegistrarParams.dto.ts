import { IsEmail, IsString } from 'class-validator'

export class RegistrarParamsDto {
    @IsString()
    nomeUsuario: string

    @IsEmail()
    email: string


    @IsString()
    senha: string

}
