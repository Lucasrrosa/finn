import { IsString } from 'class-validator'

export class RefreshTokenParamDto {
    @IsString()
    refreshToken: string
}
