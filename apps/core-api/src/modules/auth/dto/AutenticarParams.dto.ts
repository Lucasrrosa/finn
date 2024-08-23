import { IAutenticarParamsDto } from '@finn/api-contracts'
import { IsEmail, IsString } from 'class-validator'
export class AutenticarParamsDto implements IAutenticarParamsDto {
    @IsEmail()
    email: string
    @IsString()
    senha: string
}
