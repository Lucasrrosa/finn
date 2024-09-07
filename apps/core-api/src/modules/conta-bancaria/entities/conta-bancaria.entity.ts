import { EntidadeDeUsuario } from "@/common/entities/EntidadeDeUsuario"
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity()
@Unique(['nome', 'usuario'])
export class ContaBancariaEntity extends EntidadeDeUsuario {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    nome: string

    @Column({type: 'decimal', nullable: false})
    saldoInicial: number

    @Column({type: 'decimal', nullable: false})
    saldoAtual: number
}
