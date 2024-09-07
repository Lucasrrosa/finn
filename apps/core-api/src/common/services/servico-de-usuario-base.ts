import { UsuarioEntity } from '@/modules/usuario/entities/usuario.entity'
import { NotFoundException } from '@nestjs/common'
import { FindOptionsWhere, Repository } from 'typeorm'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

type UsuarioBaseEntityType = {
    id: string
    usuario: UsuarioEntity
}

export class ServicoDeUsuarioBase<Entidade extends UsuarioBaseEntityType, CreateDto, ResponseDto> {
    constructor(
        private repository: Repository<Entidade>,
        protected dtoToEntity: (dto: CreateDto) => Entidade,
        protected entityToDto: (entity: Entidade) => ResponseDto
    ) {}

    async create(dto: CreateDto, usuarioId: string) {
        const entity = this.repository.create(this.dtoToEntity(dto))
        entity.usuario = { id: usuarioId } as unknown as UsuarioEntity
        const response = await this.repository.save(entity)
        return this.entityToDto(response)
    }

    async findOne(id: string, usuarioId: string) {
        const where = { id: id, usuario: { id: usuarioId } } as unknown as FindOptionsWhere<Entidade>
        const result = await this.repository.findOne({ where })
        if (!result) throw new NotFoundException(`Registro de id = ${id} não encontrado`)
        return this.entityToDto(result)
    }

    async update(id: string, updateDto: Partial<CreateDto>, usuarioId: string) {
        const where = { id, usuario: { id: usuarioId } } as unknown as FindOptionsWhere<Entidade>
        const entity = await this.repository.findOne({ where })

        if (!entity) throw new NotFoundException(`Organização de id ${id} não encontrada`)
        const updateValues = this.repository.create(this.dtoToEntity(updateDto as CreateDto))
        const updatedEntity = { ...entity, ...updateValues }
        await this.repository.update(where, updatedEntity as QueryDeepPartialEntity<Entidade>)
    }

    async remove(id: string) {
        const where = { id: id } as FindOptionsWhere<Entidade>
        const entity = await this.repository.findOneBy(where)
        if (!entity) throw new NotFoundException(`Registro de id ${id} não encontrada`)
        return await this.repository.softRemove(entity)
    }
}
