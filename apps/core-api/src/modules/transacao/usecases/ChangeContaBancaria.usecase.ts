import { IUsecaseDeUsuario } from "@/common/IUsecaseDeUsuario"
import { ContaBancariaRepository } from "@/modules/conta-bancaria/conta-bancaria.repository"
import { CategoriaTransacaoRepository } from "@/modules/transacao/repositories/categoria-transacao.repository"
import { TransacaoRepository } from "@/modules/transacao/repositories/transacao.repository"
import { BadRequestException, Inject, Injectable } from "@nestjs/common"

@Injectable()
export class ChangeContaBancariaUsecase implements IUsecaseDeUsuario<{ contaId: string }, void> {
    @Inject()
    private readonly contaBancariaRepository: ContaBancariaRepository

    @Inject()
    private readonly transacaoRepository: TransacaoRepository

    @Inject()
    private readonly categoriaTransacaoRepository: CategoriaTransacaoRepository

    async execute(params: { contaId: string, id: string }, usuarioId: string): Promise<void> {
        const contaBancaria = await this.contaBancariaRepository.findOne({
            where: { id: params.contaId}
        })

        if(!contaBancaria)
            throw new BadRequestException('Não foi encontrada conta bancaria para os parametros informados')


        const transacao = await this.transacaoRepository.findOne({
            where: {
                id: params.id
            },
            relations: {
                contaBancaria: true
            }
        })

        const contaBancariaOld = transacao.contaBancaria

        contaBancaria

        transacao.contaBancaria = contaBancaria

        this.transacaoRepository.save(transacao)

    }
}
