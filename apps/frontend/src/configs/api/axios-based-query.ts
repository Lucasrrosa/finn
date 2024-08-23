import { IAtualizarTokenResponseDto } from '@finn/api-contracts'
import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL as string,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
})

apiInstance.interceptors.response.use(
    (response) => {
        return response
    },
    async (err) => {
        if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            const originalRequest = err.config
            originalRequest.__isRetryRequest = true
            const item = window.localStorage.getItem('usuario') || undefined
            if (!item) return Promise.reject(err)
            const usuarioInfo = JSON.parse(item) /*as IUsuarioLogado*/
            const response = await axios.post<string, AxiosResponse<IAtualizarTokenResponseDto>>(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
                refreshToken: usuarioInfo.refreshToken,
            })
            window.localStorage.setItem('usuario', JSON.stringify({ ...usuarioInfo, token: response.data.token, expiraEm: response.data.expiraEm }))
            originalRequest.headers.Authorization = `Bearer ${response.data.token}`
            return apiInstance(originalRequest)
        }
        return Promise.reject(err)
    }
)

apiInstance.interceptors.request.use(
    async (config) => {
        const item = window.localStorage.getItem('usuario') || undefined
        if (!item) return config
        const usuarioInfo = JSON.parse(item)
        config.headers.Authorization = `Bearer ${usuarioInfo.token}`
        return config
    },
    async (error) => {
        return await Promise.reject(error)
    }
)

export const axiosBaseQuery = (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<
    {
        url: string
        method?: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
        params?: AxiosRequestConfig['params']
        headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
> =>
    async function request({ url, method, data, params, headers }) {
        try {
            const result = await apiInstance({
                url: baseUrl + url,
                method,
                data,
                params,
                headers,
            })
            return { data: result.data }
        } catch (axiosError) {
            const err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }
