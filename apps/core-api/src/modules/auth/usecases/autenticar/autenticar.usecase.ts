import { IBaseUsecase } from '@/common/IBaseUsecase'
import { AutenticarParamsDto } from '@/modules/auth/dto/AutenticarParams.dto'
import { AutenticarResponseDto } from '@/modules/auth/dto/AutenticarResponse.dto'
import { IThirdPartyAuthServices } from '@/modules/auth/services/IThirdPartyAuthServices'
import { UsuarioService } from '@/modules/usuario/usuario.service'
import { Inject } from '@nestjs/common'

export class AutenticarUsecase implements IBaseUsecase<AutenticarParamsDto, AutenticarResponseDto> {
    @Inject('IThirdPartyAuthServices')
    private readonly thirdPartyAuthServices: IThirdPartyAuthServices

    @Inject()
    private readonly usuarioService: UsuarioService
    
    async execute(params: AutenticarParamsDto): Promise<AutenticarResponseDto> {
        const { access_token, usuarioId, refresh_token } = await this.thirdPartyAuthServices.autenticarUsuario(params)
        const usuario = await this.usuarioService.getByAuthId(usuarioId)

        return {
            token: access_token,
            refreshToken: refresh_token,
            nomeUsuario: usuario.nome,
        }
    }
}
