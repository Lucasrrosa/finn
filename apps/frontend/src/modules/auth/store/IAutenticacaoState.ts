import { IUsuarioLogado } from '@/modules/auth/types/IUsuarioLogado'

export interface IAutenticacaoState {
    usuarioLogado: IUsuarioLogado | null
}
