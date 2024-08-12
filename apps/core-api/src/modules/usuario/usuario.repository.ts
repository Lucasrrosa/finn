import { UsuarioEntity } from "@/modules/usuario/entities/usuario.entity"
import { Injectable } from "@nestjs/common"
import { DataSource, Repository } from "typeorm"

@Injectable()
export class UsuarioRepository extends Repository<UsuarioEntity> {
    constructor(private readonly datasource: DataSource) {
        super(UsuarioEntity, datasource.manager)
    }

    findByEmail(email: string) {
        return this.findOneBy({ email })
    }

    findByAuthId(authId: string) {
        return this.findOne({
            where: { authId },
        })
    }
}
