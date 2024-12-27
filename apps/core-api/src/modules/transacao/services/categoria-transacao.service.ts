import { ServicoDeUsuarioBase } from "@/common/services/servico-de-usuario-base"
import { CategoriaTransacaoEntity } from "@/modules/transacao/entities/categoria-transacao.entity"
import { CategoriaTransacaoRepository } from "@/modules/transacao/repositories/categoria-transacao.repository"
import { ICategoriaTransacaoResponseDto, ICreateCategoriaTransacaoDto } from "@finn/api-contracts"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class CategoriaTransacaoService extends ServicoDeUsuarioBase<
    CategoriaTransacaoEntity,
    ICreateCategoriaTransacaoDto,
    ICategoriaTransacaoResponseDto
> {
    constructor(
        @InjectRepository(CategoriaTransacaoRepository)
        private readonly categoriaTransacaoRepository: CategoriaTransacaoRepository
    ) {
        super(
            categoriaTransacaoRepository,
            (dto) => this.categoriaTransacaoRepository.create({ ...dto }),
            (entity) => ({ id: entity.id, descricao: entity.descricao})
        )
        
    }

    async getAll( usuarioId: string): Promise<ICategoriaTransacaoResponseDto[]> {
        const result =  await this.categoriaTransacaoRepository.find({
            where: {
                usuario: {
                    id: usuarioId
                }
            }
        })

        return result.map(this.entityToDto)
    }

}
