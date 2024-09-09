import { TransacaoEntity } from "@/modules/transacao/entities/transacao.entity"
import { ITransacaoBancariaResponseDto } from "@finn/api-contracts"

export class TransacaoMapper {
    static entityToResponseDto(entity: TransacaoEntity): ITransacaoBancariaResponseDto {
        return {
            categorias: entity.categorias.map(i => ({ id: i.id, descricao: i.descricao })),
            contaBancariaId: entity.contaBancaria.id,
            data: entity.data.toString(),
            descricao: entity.descricao,
            tipo: entity.tipo,
            valor: entity.valor,
            id: entity.id,
            computado: entity.computado
        }
    }
}
