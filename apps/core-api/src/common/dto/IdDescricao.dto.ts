import { IIdDescricao } from "@finn/api-contracts"
import { IsOptional, IsString, IsUUID } from "class-validator"

export class IdDescricao implements IIdDescricao {
    
    @IsUUID()
    id: string

    @IsString()
    @IsOptional()
    descricao: string

}
