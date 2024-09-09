import { IdDescricao } from "@/common/dto/IdDescricao.dto"
import { ICreateTransacaoDto, TransacaoType } from "@finn/api-contracts"
import { IsArray, IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator"

export class CreateTransacaoDto implements ICreateTransacaoDto {
    @IsString()
    descricao: string

    @IsNumber()
    valor: number

    @IsString()
    tipo: TransacaoType

    @IsDateString()
    data: string

    @IsArray()
    @ValidateNested({each: true})
    categorias: IdDescricao[]

    @IsBoolean()
    @IsOptional()
    computado?: boolean

    @IsUUID()
    contaBancariaId: string
}
