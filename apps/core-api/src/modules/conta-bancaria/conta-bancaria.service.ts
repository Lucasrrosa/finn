import { ServicoDeUsuarioBase } from "@/common/services/servico-de-usuario-base"
import { ContaBancariaRepository } from "@/modules/conta-bancaria/conta-bancaria.repository"
import { ContaBancariaEntity } from "@/modules/conta-bancaria/entities/conta-bancaria.entity"
import { IContaBancariaResponseDto, ICreateContaBancariaDto } from "@finn/api-contracts"
import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class ContaBancariaService extends ServicoDeUsuarioBase<ContaBancariaEntity, ICreateContaBancariaDto, IContaBancariaResponseDto> {
    constructor(
        @InjectRepository(ContaBancariaRepository)
        private readonly contaBancariaRepository: ContaBancariaRepository
    ) {
        super(
            contaBancariaRepository,
            (dto) => this.contaBancariaRepository.create({ ...dto, saldoAtual: dto.saldoInicial}),
            (entity) => ({ id: entity.id, nome: entity.nome, saldoAtual: entity.saldoAtual, saldoInicial: entity.saldoInicial, usuarioId: entity.usuario.id })
        )
        
    }

    async update(id: string, updateDto: Partial<ICreateContaBancariaDto>, usuarioId: string): Promise<void> {
        const entity = await this.contaBancariaRepository.findOne({ where: {
            id,
            usuario: {
                id: usuarioId
            }
        } })

        if (!entity) throw new NotFoundException(`Organização de id ${id} não encontrada`)

        if(updateDto.nome)
            entity.nome = updateDto.nome
        if(updateDto.saldoInicial) {
            const diferenca = updateDto.saldoInicial - entity.saldoInicial
            entity.saldoInicial = updateDto.saldoInicial
            entity.saldoAtual = entity.saldoAtual + diferenca

        }
        await this.contaBancariaRepository.save(entity)
    }
}
