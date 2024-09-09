import { ContaBancariaEntity } from "@/modules/conta-bancaria/entities/conta-bancaria.entity"
import { IContaBancariaResponseDto } from "@finn/api-contracts"

export class ContaBancariaMapper {
    static entityToDto(entity: ContaBancariaEntity): IContaBancariaResponseDto {
        return {
            id: entity.id,
            nome: entity.nome,
            saldoAtual: entity.saldoAtual,
            saldoInicial: entity.saldoInicial
        }
    }
}
