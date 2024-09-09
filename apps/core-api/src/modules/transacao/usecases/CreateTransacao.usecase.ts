import { IUsecaseDeUsuario } from "@/common/IUsecaseDeUsuario"
import { ContaBancariaRepository } from "@/modules/conta-bancaria/conta-bancaria.repository"
import { CategoriaTransacaoRepository } from "@/modules/transacao/repositories/categoria-transacao.repository"
import { TransacaoRepository } from "@/modules/transacao/repositories/transacao.repository"
import { ICreateTransacaoDto } from "@finn/api-contracts"
import { BadRequestException, Inject, Injectable } from "@nestjs/common"
import { In } from "typeorm"

@Injectable()
export class CreateTransacaoUsecase implements IUsecaseDeUsuario<ICreateTransacaoDto, void> {
    @Inject()
    private readonly contaBancariaRepository: ContaBancariaRepository

    @Inject()
    private readonly transacaoRepository: TransacaoRepository

    @Inject()
    private readonly categoriaTransacaoRepository: CategoriaTransacaoRepository

    async execute(params: ICreateTransacaoDto, usuarioId: string): Promise<void> {
        const contaBancaria = await this.contaBancariaRepository.findOne({
            where: { id: params.contaBancariaId}
        })

        if(!contaBancaria)
            throw new BadRequestException('Não foi encontrada conta bancaria para os parametros informados')


        const categorias = await this.categoriaTransacaoRepository.find({
            where: {
                id: In(params.categorias.map(item => item.id))
            }
        })

        const newTransacao = this.transacaoRepository.create({
            ...params,
            computado: params.computado,
            usuario: { id: usuarioId },
            valor: params.valor,
            data: params.data,
            descricao: params.descricao,
            tipo: params.tipo,
            contaBancaria,
            categorias,
        })

        await this.transacaoRepository.save(newTransacao)

        if(newTransacao.computado) {
            const atualizacaoSaldo =  newTransacao.tipo == 'DESPESA' ? - newTransacao.valor : newTransacao.valor
            contaBancaria.saldoAtual += atualizacaoSaldo
            await this.contaBancariaRepository.save(contaBancaria)
        }

    }
}
