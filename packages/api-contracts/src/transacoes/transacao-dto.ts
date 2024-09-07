import { IIdDescricao } from '../common/IIdDescricao'
import { TransacaoType } from "./transacao-types"

export interface ICreateTransacaoDto {
    descricao: string
    valor: number
    tipo: TransacaoType
    data: Date
    categorias: IIdDescricao[]
    computado?: boolean
    contaBancariaId: string
}


export interface ITransacaoBancariaResponseDto extends ICreateTransacaoDto, IIdDescricao {

}
