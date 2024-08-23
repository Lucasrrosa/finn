import { IAutenticacaoState } from '@/modules/auth/store/IAutenticacaoState'
import { IUsuarioLogado } from '@/modules/auth/types/IUsuarioLogado'

export const getAuthInitialState = (): IAutenticacaoState => {
    const storeValue = window.localStorage.getItem('usuario')
    const usuarioLogado: IUsuarioLogado | null = storeValue ? JSON.parse(storeValue) : null
    return {
        usuarioLogado,
    }
}
