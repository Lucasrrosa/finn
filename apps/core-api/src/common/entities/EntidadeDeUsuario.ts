import { BaseEntity } from '@/common/entities/BaseEntity'
import { UsuarioEntity } from '@/modules/usuario/entities/usuario.entity'
import { JoinColumn, ManyToOne } from 'typeorm'

export class EntidadeDeUsuario extends BaseEntity {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    @ManyToOne(() => UsuarioEntity, () => {}, { nullable: false })
    @JoinColumn({ name: 'usuarioId' })
    usuario: UsuarioEntity

    constructor(usuario: UsuarioEntity) {
        super()
        this.usuario = usuario
    }
}
