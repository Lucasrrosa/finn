import { SupabaseConfig } from '@/config/supabase.config'
import { AutenticarParamsDto } from '@/modules/auth/dto/AutenticarParams.dto'
import { RegistrarParamsDto } from '@/modules/auth/dto/RegistrarParams.dto'
import { IThirdPartyAuthServices } from '@/modules/auth/services/IThirdPartyAuthServices'
import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SupabaseClient } from '@supabase/supabase-js'
@Injectable()
export class SupabaseAuthService implements IThirdPartyAuthServices {
    private client: SupabaseClient

    constructor(private configService: ConfigService) {
        const { key, url } = this.configService.get<SupabaseConfig>('supabase')
        this.client = new SupabaseClient(url, key, {
            auth: { persistSession: false },
        })
    }

    async autenticarUsuario(params: AutenticarParamsDto) {
        const result = await this.client.auth.signInWithPassword({ email: params.email, password: params.senha })
        if (result.error) {
            throw new UnauthorizedException(result.error.message)
        }
        return {
            access_token: result.data.session?.access_token,
            refresh_token: result.data.session?.refresh_token,
            usuarioId: result.data.user?.id,
            expiraEm: result.data.session?.expires_at,
        }
    }
    async registrar(params: RegistrarParamsDto) {
        const result = await this.client.auth.signUp({ email: params.email, password: params.senha })
        if (result.error) throw new InternalServerErrorException(result.error.message)

        return {
            id: result.data.user?.id,
            email: result.data.user?.email,
        }
    }

    async atualizarToken(refreshToken: string) {
        const result = await this.client.auth.refreshSession({ refresh_token: refreshToken })
        if (result.error) throw new InternalServerErrorException(result.error.message)
        return {
            access_token: result.data.session?.access_token,
            refresh_token: result.data.session?.refresh_token,
            expiraEm: result.data.session?.expires_at,
            usuarioId: result.data.user?.id,
        }
    }
    async buscarUsuarioPorIdToken(idToken: string) {
        const user = await this.client.auth.getUser(idToken)
        if (user.error) throw new InternalServerErrorException(user.error.message)
        return user.data.user.id
    }
}
