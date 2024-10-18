import { IUpdateContaBancariaDto } from "@finn/api-contracts"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateContaBancariaDto implements IUpdateContaBancariaDto {

    @IsString()
    @IsOptional()
    nome?: string
    
    @IsNumber()
    @IsOptional()
    saldoInicial?:number
}
