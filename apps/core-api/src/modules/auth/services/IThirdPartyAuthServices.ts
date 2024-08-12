import { AutenticarParamsDto } from '@/modules/auth/dto/AutenticarParams.dto'
import { RegistrarParamsDto } from '@/modules/auth/dto/RegistrarParams.dto'

export type AutenticarResponseDto = { access_token: string; usuarioId: string; expiraEm: number; refresh_token: string }

export interface IThirdPartyAuthServices {
    autenticarUsuario(params: AutenticarParamsDto): Promise<AutenticarResponseDto>
    atualizarToken(refreshToken: string): Promise<AutenticarResponseDto>
    registrar(params: RegistrarParamsDto): Promise<{ id: string; email: string }>
    buscarUsuarioPorIdToken(idToken: string): Promise<string>
}
