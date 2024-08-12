import { IS_PUBLIC_KEY } from '@/modules/auth/decorators/IsPublic.decorator'
import { IThirdPartyAuthServices } from '@/modules/auth/services/IThirdPartyAuthServices'
import { UsuarioService } from '@/modules/usuario/usuario.service'
import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class JwtAuthGuards implements CanActivate {
    @Inject('IThirdPartyAuthServices')
    private readonly thirdPartyauthService: IThirdPartyAuthServices

    @Inject()
    private usuarioService: UsuarioService

    @Inject()
    private reflector: Reflector

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const authMetaData = this.reflector.getAllAndOverride<string[]>('auth', [
            context.getHandler(),
            context.getClass(),
        ])

        if (authMetaData?.includes(IS_PUBLIC_KEY)) return true
        const token = this.extractTokenFromHeader(request)

        if (!token) throw new UnauthorizedException()

        try {
            const authData = await this.thirdPartyauthService.buscarUsuarioPorIdToken(token)
            const userInfo = await this.usuarioService.getByAuthId(authData)
            request['userInfo'] = userInfo
        } catch (error) {
            throw new UnauthorizedException((error as Error)?.message)
        }

        return true
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers['authorization']?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }
}
