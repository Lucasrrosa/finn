import { Middleware, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { enqueueSnackbar } from 'notistack'

export const errorMessageMiddleware: Middleware = () => (next) => (action) => {
    if (isRejectedWithValue(action) && (action as PayloadAction<AxiosResponse>).payload.status !== 401) {
        enqueueSnackbar((action as PayloadAction<AxiosResponse>).payload.data.message, { variant: 'error' })
    }
    return next(action)
}
