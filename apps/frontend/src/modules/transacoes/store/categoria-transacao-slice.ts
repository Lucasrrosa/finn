import { axiosBaseQuery } from '@/configs/api/axios-based-query'
import { ICategoriaTransacaoResponseDto, ICreateCategoriaTransacaoDto } from '@finn/api-contracts'
import { createApi } from '@reduxjs/toolkit/query/react'

const TRANSACAO_URL = '/categoria-transacao'

export const categoriaTransacaoApiSlice = createApi({
    reducerPath: 'categoriaTransacaoApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['categoria-transacao'],
    endpoints: (builder) => ({
        createCategoriaTransacao: builder.mutation<void, ICreateCategoriaTransacaoDto>({
            query: (body) => ({
                method: 'POST',
                url: `${TRANSACAO_URL}`,
                data: body,
            }),
        }),
        getAllCategoriaTransacao: builder.query<ICategoriaTransacaoResponseDto[], void>({
            query: () => ({
                method: 'GET',
                url: `${TRANSACAO_URL}`,
            }),
        }),
        getOneCategoriaTransacao: builder.query<ICategoriaTransacaoResponseDto, string>({
            query: (id) => ({
                method: 'GET',
                url: `${TRANSACAO_URL}/${id}`,
            }),
        }),
    }),
})


export const {
    useGetAllCategoriaTransacaoQuery,
    useGetOneCategoriaTransacaoQuery,
    useCreateCategoriaTransacaoMutation
} = categoriaTransacaoApiSlice

