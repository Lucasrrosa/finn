import { IThirdPartyAuthServices } from '@/modules/auth/services/IThirdPartyAuthServices'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class AtualizarTokenUsecase {
    @Inject('IThirdPartyAuthServices')
    private readonly thirdPartyAuthServices: IThirdPartyAuthServices
    async execute(refreshToken: string) {
        const { access_token, expiraEm } = await this.thirdPartyAuthServices.atualizarToken(refreshToken)
        return { token: access_token, expiraEm }
    }
}
