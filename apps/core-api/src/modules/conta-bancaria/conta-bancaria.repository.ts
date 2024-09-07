import { ContaBancariaEntity } from "@/modules/conta-bancaria/entities/conta-bancaria.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class ContaBancariaRepository extends Repository<ContaBancariaEntity>{
    constructor(private readonly datasource: DataSource) {
        super(ContaBancariaEntity, datasource.manager)
    }

    async findByNomeAndUsuarioId(nome: string, usuarioId: string) {
        return await this.findOne({
            where: {
                usuario: {id: usuarioId},
                nome
            }
        })
    }

}
