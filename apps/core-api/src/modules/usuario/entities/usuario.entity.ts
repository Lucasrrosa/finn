import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    nome: string

    @Column({ nullable: false, unique: true })
    email: string

    @Column({ nullable: false, unique: true })
    authId: string

}
