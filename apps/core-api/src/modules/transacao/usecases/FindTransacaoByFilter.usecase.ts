import { IUsecaseDeUsuario } from "@/common/IUsecaseDeUsuario"
import { TransacaoMapper } from "@/modules/transacao/mappers/transacao.mapper"
import { TransacaoRepository } from "@/modules/transacao/repositories/transacao.repository"
import { IFiltroTransacao, IPaginatedResult, ITransacaoBancariaResponseDto } from "@finn/api-contracts"
import { Inject } from "@nestjs/common"

export class FindTransacaoByFilterUsecase implements IUsecaseDeUsuario<
    IFiltroTransacao,
    IPaginatedResult<ITransacaoBancariaResponseDto>
> {

    @Inject()
    private readonly transacaoRepository: TransacaoRepository

    async execute(params: IFiltroTransacao, usuarioId: string): Promise<
        IPaginatedResult<ITransacaoBancariaResponseDto>
    > {    
        const [data, total] =  await this.transacaoRepository.findByFiltro(params, usuarioId)

        return {
            data: data.map(TransacaoMapper.entityToResponseDto),
            total: total,
            page: params.page,
            totalPages: total > params.pageSize ? Math.trunc(total/params.pageSize) : 1
        }
    }
}
