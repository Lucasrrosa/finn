import { IFiltroTransacao } from "@finn/api-contracts"
import { Type } from "class-transformer"
import { IsArray, IsDate, IsInt, IsOptional } from "class-validator"

export class FiltroTransacaoDto implements IFiltroTransacao {
    @IsArray()
    @IsOptional()
    contasBancariasId?: string[]

    @IsArray()
    @IsOptional()
    categoriasId?: string[]
    
    @IsDate()
    @IsOptional()
    dataInicio?: Date
    
    @IsDate()
    @IsOptional()
    dataFim?: Date
    
    @IsInt()
    @Type(() => Number)
    page: number
    
    @IsInt()
    @Type(() => Number)
    pageSize: number

}
