import { TransacaoEntity } from "@/modules/transacao/entities/transacao.entity"
import { IFiltroTransacao } from "@finn/api-contracts"
import { Injectable } from "@nestjs/common"
import { DataSource, Repository } from "typeorm"

@Injectable()
export class TransacaoRepository extends Repository<TransacaoEntity> {
    constructor(private readonly datasource: DataSource) {
        super(TransacaoEntity, datasource.manager)
    }

    async findByFiltro(filtro: IFiltroTransacao, usuarioId): Promise<[TransacaoEntity[], number]> {
        const query =  this.createQueryBuilder('transacao')
            .leftJoinAndSelect('transacao.categorias', 'categorias')
            .leftJoinAndSelect('transacao.contaBancaria', 'conta')
            .where('transacao.usuario.id = :usuarioId', { usuarioId })

        if(filtro.categoriasId?.length > 0)
            query.andWhere('transacao.categorias.id IN (:...categoriasIds)', { categoriasIds: filtro.categoriasId })

        if(filtro.contasBancariasId?.length > 0)
            query.andWhere('conta.id IN (:...contasBancariasId)', { contasBancariasId: filtro.contasBancariasId })
            
        if(filtro.dataInicio)
            query.andWhere('transacao.data.id > :dataInicio', { dataInicio: filtro.dataInicio})
        
        if(filtro.dataFim)
        query.andWhere('transacao.data.id < :dataFim', { dataFim: filtro.dataFim })

        query.take(filtro.page)
        query.take(filtro.pageSize)

        return await query.getManyAndCount()
    }
}
