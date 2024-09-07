import { IsNumber, IsString } from "class-validator";

export class CreateContaBancariaDto {
    @IsString()
    nome: string;
    @IsNumber()
    saldoInicial: number;
}
