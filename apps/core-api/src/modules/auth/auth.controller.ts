import { IsPublic } from '@/modules/auth/decorators/IsPublic.decorator'
import { AutenticarParamsDto } from '@/modules/auth/dto/AutenticarParams.dto'
import { RefreshTokenParamDto } from '@/modules/auth/dto/RefreshTokenParam.dto'
import { RegistrarParamsDto } from '@/modules/auth/dto/RegistrarParams.dto'
import { AtualizarTokenUsecase } from '@/modules/auth/usecases/atualizar-token/atualizar-token'
import { AutenticarUsecase } from '@/modules/auth/usecases/autenticar/autenticar.usecase'
import { RegistrarUsecase } from '@/modules/auth/usecases/registrar/registrar.usecase'
import { IAtualizarTokenResponseDto, IAutenticarResponseDto } from '@finn/api-contracts'
import { Body, Controller, Inject, Post } from '@nestjs/common'

@Controller('auth')
export class AuthController {
    @Inject()
    private readonly registrarUsecase: RegistrarUsecase

    @Inject()
    private readonly autenticarUsecase: AutenticarUsecase
    @Inject()
    private readonly atualizarTokenUsecase: AtualizarTokenUsecase

    @Post('registrar')
    @IsPublic()
    async registrar(@Body() body: RegistrarParamsDto): Promise<void> {
        await this.registrarUsecase.execute(body)
    }

    @Post('refresh')
    @IsPublic()
    async refreshToken(@Body() { refreshToken }: RefreshTokenParamDto): Promise<IAtualizarTokenResponseDto> {
        return await this.atualizarTokenUsecase.execute(refreshToken)
    }

    @Post('autenticar')
    @IsPublic()
    async autenticar(@Body() body: AutenticarParamsDto): Promise<IAutenticarResponseDto> {
        return await this.autenticarUsecase.execute(body)
    }
}
