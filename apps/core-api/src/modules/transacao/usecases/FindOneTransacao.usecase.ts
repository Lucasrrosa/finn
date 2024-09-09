import { IBaseUsecase } from "@/common/IBaseUsecase"
import { TransacaoRepository } from "@/modules/transacao/repositories/transacao.repository"
import { ITransacaoBancariaResponseDto } from "@finn/api-contracts"
import { Inject, Injectable } from "@nestjs/common"

@Injectable()
export class FindOneTransacaoUsecase implements IBaseUsecase<string, ITransacaoBancariaResponseDto> {
    
    @Inject()
    private readonly transacaoRepository: TransacaoRepository

    async execute(id: string): Promise<ITransacaoBancariaResponseDto> {
        const transacao = await this.transacaoRepository.findOne({where: { id }})

        return {
            categorias: transacao.categorias.map(i => ({ id: i.id, descricao: i.descricao })),
            contaBancariaId: transacao.contaBancaria.id,
            data: transacao.data.toString(),
            descricao: transacao.descricao,
            tipo: transacao.tipo,
            valor: transacao.valor,
            id: transacao.id,
            computado: transacao.computado
        }
    }

}
