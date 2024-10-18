export interface ICreateContaBancariaDto {
    nome: string
    saldoInicial: number
}


export interface IContaBancariaResponseDto extends ICreateContaBancariaDto {
    id: string
    saldoAtual: number
}

export interface IUpdateContaBancariaDto {
    nome?: string
    saldoInicial?:number
}
