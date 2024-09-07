import { EntidadeDeUsuario } from "@/common/entities/EntidadeDeUsuario"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CategoriaTransacaoEntity extends EntidadeDeUsuario {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    descricao: string


}
