import { getAuthInitialState } from '@/modules/auth/store/get-autenticacao-initial-state'
import { IUsuarioLogado } from '@/modules/auth/types/IUsuarioLogado'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
const autenticacaoSlice = createSlice({
    name: 'autenticacao',
    initialState: getAuthInitialState(),
    reducers: {
        desautenticar: (state) => {
            state.usuarioLogado = null
            window.localStorage.setItem('usuario', '')
        },
        gravarDadosAutenticacao: (state, action: PayloadAction<IUsuarioLogado>) => {
            state.usuarioLogado = action.payload
            window.localStorage.setItem('usuario', JSON.stringify(action.payload))
        },
    },
})

export const { desautenticar, gravarDadosAutenticacao } = autenticacaoSlice.actions

export const autenticacaoReducer = autenticacaoSlice.reducer
