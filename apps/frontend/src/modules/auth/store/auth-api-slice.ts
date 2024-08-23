import { axiosBaseQuery } from '@/configs/api/axios-based-query'
import { gravarDadosAutenticacao } from '@/modules/auth/store/auth-slice'
import { IAutenticarParamsDto, IAutenticarResponseDto, IRegistrarParamsDto } from '@finn/api-contracts'
import { createApi } from '@reduxjs/toolkit/query/react'

const AUTENTICACAO_URL = '/auth'

export const autenticacaoApiSlice = createApi({
    reducerPath: 'autenticacaoApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['Autenticacao'],
    endpoints: (builder) => ({
        autenticarUsuario: builder.mutation<IAutenticarResponseDto, IAutenticarParamsDto>({
            query: (body) => ({
                method: 'POST',
                url: `${AUTENTICACAO_URL}/autenticar`,
                data: body,
            }),
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled
                dispatch(gravarDadosAutenticacao(data))
            },
        }),
        registrar: builder.mutation<void, IRegistrarParamsDto>({
            query: (body) => ({
                method: 'POST',
                url: `${AUTENTICACAO_URL}/registrar`,
                data: body,
            }),
        }),
    }),
})

export const { useAutenticarUsuarioMutation, useRegistrarMutation } = autenticacaoApiSlice
