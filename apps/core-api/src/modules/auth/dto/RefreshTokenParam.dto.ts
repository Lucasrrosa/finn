import { IRefreshTokenParamDto } from '@finn/api-contracts'
import { IsString } from 'class-validator'
export class RefreshTokenParamDto implements IRefreshTokenParamDto {
    @IsString()
    refreshToken: string
}
