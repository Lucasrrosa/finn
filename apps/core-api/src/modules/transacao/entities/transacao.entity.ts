import { EntidadeDeUsuario } from "@/common/entities/EntidadeDeUsuario"
import { ContaBancariaEntity } from "@/modules/conta-bancaria/entities/conta-bancaria.entity"
import { CategoriaTransacaoEntity } from "@/modules/transacao/entities/categoria-transacao.entity"
import { TransacaoType } from "@finn/api-contracts"
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TransacaoEntity extends EntidadeDeUsuario {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    descricao: string

    @Column({type: 'decimal', nullable: false})
    valor: number

    @Column({ type: 'date', nullable: false })
    data: Date

    @Column({ type: 'bool', default: false })
    computado: boolean

    @Column({
        type: 'enum',
        enum: ['DESPESA', 'RECEITA'],
        nullable: false
    })
    tipo: TransacaoType

    @ManyToMany(() => CategoriaTransacaoEntity)
    @JoinTable()
    categorias: CategoriaTransacaoEntity[]

    @ManyToOne(() => ContaBancariaEntity, () => {}, { nullable: false, cascade: true })
    @JoinColumn()
    contaBancaria: ContaBancariaEntity

}
