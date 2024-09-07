import { IdDescricao } from "@/common/dto/IdDescricao.dto"
import { ICreateTransacaoDto, TransacaoType } from "@finn/api-contracts"
import { IsArray, IsBoolean, IsDate, IsNumber, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator"

export class CreateTransacaoDto implements ICreateTransacaoDto {
    @IsString()
    descricao: string

    @IsNumber()
    valor: number

    @IsString()
    tipo: TransacaoType

    @IsDate()
    data: Date

    @IsArray()
    @ValidateNested({each: true})
    categorias: IdDescricao[]

    @IsBoolean()
    @IsOptional()
    computado?: boolean

    @IsUUID()
    contaBancariaId: string
}
