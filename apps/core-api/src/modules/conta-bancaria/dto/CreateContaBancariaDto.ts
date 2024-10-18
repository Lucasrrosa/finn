import { ICreateContaBancariaDto } from "@finn/api-contracts"
import { IsNumber, IsString } from "class-validator"

export class CreateContaBancariaDto implements ICreateContaBancariaDto {
    @IsString()
    nome: string;
    @IsNumber()
    saldoInicial: number;
}
