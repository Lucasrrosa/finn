import { IsEmail, IsString } from 'class-validator'

export class AutenticarParamsDto {
    @IsEmail()
    email: string
    @IsString()
    senha: string
}
