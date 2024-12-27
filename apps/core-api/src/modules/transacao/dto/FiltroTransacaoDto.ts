import { IFiltroTransacao } from "@finn/api-contracts"
import { Type } from "class-transformer"
import { IsArray, IsDateString, IsInt, IsOptional } from "class-validator"

export class FiltroTransacaoDto implements IFiltroTransacao {
    @IsArray()
    @IsOptional()
    contasBancariasId?: string[]

    @IsArray()
    @IsOptional()
    categoriasId?: string[]
    
    @IsDateString()
    @IsOptional()
    dataInicio?: Date
    
    @IsDateString()
    @IsOptional()
    dataFim?: Date
    
    @IsInt()
    @Type(() => Number)
    page: number
    
    @IsInt()
    @Type(() => Number)
    pageSize: number

}
