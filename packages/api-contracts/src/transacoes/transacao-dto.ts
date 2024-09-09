import { IIdDescricao } from '../common/IIdDescricao'
import { IPaginacao } from '../common/IPaginacao'
import { TransacaoType } from "./transacao-types"

export interface ICreateTransacaoDto {
    descricao: string
    valor: number
    tipo: TransacaoType
    data: string
    categorias: IIdDescricao[]
    computado?: boolean
    contaBancariaId: string
}


export interface ITransacaoBancariaResponseDto extends ICreateTransacaoDto, IIdDescricao {

}

export interface IFiltroTransacao extends IPaginacao {
    contasBancariasId?: string[],
    categoriasId?: string[],
    dataInicio?: Date,
    dataFim?: Date,
    
}
