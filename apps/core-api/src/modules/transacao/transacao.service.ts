import { ServicoDeUsuarioBase } from '@/common/services/servico-de-usuario-base'
import { TransacaoEntity } from '@/modules/transacao/entities/transacao.entity'
import { TransacaoRepository } from '@/modules/transacao/transacao.repository'
import { ICreateTransacaoDto, ITransacaoBancariaResponseDto } from '@finn/api-contracts'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class TransacaoService extends ServicoDeUsuarioBase<
    TransacaoEntity,
    ICreateTransacaoDto,
    ITransacaoBancariaResponseDto
> {

    constructor(
        @InjectRepository(TransacaoRepository)
        private readonly transacaoRepository: TransacaoRepository
    ) {
        super(
            transacaoRepository,
            (dto) => this.transacaoRepository.create({ ...dto, contaBancaria: { id: dto.contaBancariaId}}),
            (entity) => ({
                id: entity.id,
                descricao: entity.descricao,
                valor: entity.valor,
                tipo: entity.tipo,
                data: entity.data,
                categorias: entity.categorias.map(item => ({id: item.id, descricao: item.descricao})),
                computado: entity.computado,
                contaBancariaId: entity.contaBancaria.id,
            })
        ) 
    }
}
