import { TransacaoEntity } from "@/modules/transacao/entities/transacao.entity"
import { Injectable } from "@nestjs/common"
import { DataSource, Repository } from "typeorm"

@Injectable()
export class TransacaoRepository extends Repository<TransacaoEntity> {
    constructor(private readonly datasource: DataSource) {
        super(TransacaoEntity, datasource.manager)
    }
}
