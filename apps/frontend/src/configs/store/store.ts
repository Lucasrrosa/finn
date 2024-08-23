import { errorMessageMiddleware } from '@/configs/store/middleware/error-message-middleware'
import { naoAutorizadoMiddleware } from '@/configs/store/middleware/nao-autorizado-middleware'
import { autenticacaoApiSlice } from '@/modules/auth/store/auth-api-slice'
import { autenticacaoReducer } from '@/modules/auth/store/auth-slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        autenticacao: autenticacaoReducer,
        [autenticacaoApiSlice.reducerPath]: autenticacaoApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(autenticacaoApiSlice.middleware)
            .concat(naoAutorizadoMiddleware)
            .concat(errorMessageMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
