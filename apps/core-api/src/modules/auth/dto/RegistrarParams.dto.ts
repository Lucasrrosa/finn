import { IsEmail, IsString } from 'class-validator'

export class RegistrarParamsDto {
    @IsString()
    nomeUsuario: string

    @IsEmail()
    email: string

    @IsString()
    telefone: string

    @IsString()
    senha: string

    @IsString()
    nomeOrganizacao: string
}
