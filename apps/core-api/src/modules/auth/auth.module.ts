import { JwtAuthGuards } from '@/modules/auth/guards/JwtAuthGuard'
import { SupabaseAuthService } from '@/modules/auth/services/SupabaseAuth.service'
import { AtualizarTokenUsecase } from '@/modules/auth/usecases/atualizar-token/atualizar-token'
import { AutenticarUsecase } from '@/modules/auth/usecases/autenticar/autenticar.usecase'
import { RegistrarUsecase } from '@/modules/auth/usecases/registrar/registrar.usecase'
import { UsuarioModule } from '@/modules/usuario/usuario.module'
import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { AuthController } from './auth.controller'

@Module({
    imports: [UsuarioModule],
    controllers: [AuthController],
    providers: [
        RegistrarUsecase,
        AutenticarUsecase,
        AtualizarTokenUsecase,
        {
            provide: 'IThirdPartyAuthServices',
            useClass: SupabaseAuthService,
        },
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuards,
        },
    ],
})
export class AuthModule {}
