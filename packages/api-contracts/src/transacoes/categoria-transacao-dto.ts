import { IIdDescricao } from "../common/IIdDescricao"

export interface ICreateCategoriaTransacaoDto {
    descricao: string
}

export interface ICategoriaTransacaoResponseDto extends IIdDescricao {}
