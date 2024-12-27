import { IdDescricao } from "@/common/dto/IdDescricao.dto"
import { ICreateTransacaoDto, TransacaoType } from "@finn/api-contracts"
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator"

export class CreateTransacaoDto implements ICreateTransacaoDto {
    @IsString()
    descricao: string

    @IsNumber()
    valor: number

    @IsString()
    tipo: TransacaoType

    @IsDateString()
    data: string

    @ValidateNested({each: true})
    categoria: IdDescricao

    @IsBoolean()
    @IsOptional()
    computado?: boolean

    @IsUUID()
    contaBancariaId: string
}
