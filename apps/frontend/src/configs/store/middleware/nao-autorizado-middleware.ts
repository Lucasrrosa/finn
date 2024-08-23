import { desautenticar } from '@/modules/auth/store/auth-slice'
import { Middleware, MiddlewareAPI, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { enqueueSnackbar } from 'notistack'

export const naoAutorizadoMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action) && (action as PayloadAction<AxiosResponse>).payload.status === 401) {
        enqueueSnackbar('Usuário não autorizado', { variant: 'error' })
        api.dispatch(desautenticar())
    }
    return next(action)
}
