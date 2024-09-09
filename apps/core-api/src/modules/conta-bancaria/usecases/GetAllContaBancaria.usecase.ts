import { IBaseUsecase } from "@/common/IBaseUsecase"
import { ContaBancariaMapper } from "@/modules/conta-bancaria/conta-bancaria.mapper"
import { ContaBancariaRepository } from "@/modules/conta-bancaria/conta-bancaria.repository"
import { IContaBancariaResponseDto } from "@finn/api-contracts"
import { Inject } from "@nestjs/common"

export class GetAllContaBancaria implements IBaseUsecase<string, IContaBancariaResponseDto[]> {

    @Inject()
    private readonly contaBancariaRepository: ContaBancariaRepository

    async execute(usuarioId: string): Promise<IContaBancariaResponseDto[]> {
        const result = await this.contaBancariaRepository.findBy({
            usuario: {
                id: usuarioId
            }
        })

        return result.map(ContaBancariaMapper.entityToDto)
    }

}
