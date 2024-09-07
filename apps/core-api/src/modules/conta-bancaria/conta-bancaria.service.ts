import { ServicoDeUsuarioBase } from "@/common/services/servico-de-usuario-base";
import { ContaBancariaRepository } from "@/modules/conta-bancaria/conta-bancaria.repository";
import { ContaBancariaEntity } from "@/modules/conta-bancaria/entities/conta-bancaria.entity";
import { IContaBancariaResponseDto, ICreateContaBancariaDto } from "@finn/api-contracts";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

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
}
