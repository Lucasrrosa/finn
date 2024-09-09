import { CategoriaTransacaoEntity } from "@/modules/transacao/entities/categoria-transacao.entity"
import { Injectable } from "@nestjs/common"
import { DataSource, Repository } from "typeorm"

@Injectable()
export class CategoriaTransacaoRepository extends Repository<CategoriaTransacaoEntity> {
    constructor(private readonly datasource: DataSource) {
        super(CategoriaTransacaoEntity, datasource.manager)
    }
}
