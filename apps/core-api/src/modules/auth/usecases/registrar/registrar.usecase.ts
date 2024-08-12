import { IBaseUsecase } from '@/common/IBaseUsecase'
import { RegistrarParamsDto } from '@/modules/auth/dto/RegistrarParams.dto'
import { IThirdPartyAuthServices } from '@/modules/auth/services/IThirdPartyAuthServices'
import { Usuario } from '@/modules/usuario/models/Usuario'
import { UsuarioService } from '@/modules/usuario/usuario.service'
import { BadRequestException, Inject, Injectable } from '@nestjs/common'

@Injectable()
export class RegistrarUsecase implements IBaseUsecase<RegistrarParamsDto, Usuario> {
    @Inject()
    private readonly usuarioService: UsuarioService

    @Inject('IThirdPartyAuthServices')
    private readonly thirdPartyAuthServices: IThirdPartyAuthServices


    async execute(params: RegistrarParamsDto): Promise<Usuario> {
        const existeUsuario = await this.usuarioService.alreadyExistsUsuarioSameEmail(params.email)

        if (existeUsuario) throw new BadRequestException(`Usuário com o email ${params.email} já existe`)

        const { id: authId } = await this.thirdPartyAuthServices.registrar(params)

        const usuario = await this.usuarioService.createUsuario({
            nome: params.nomeUsuario,
            email: params.email,
            authId,

        })
        return usuario
    }
}
