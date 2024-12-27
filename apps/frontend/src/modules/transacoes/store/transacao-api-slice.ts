import { axiosBaseQuery } from '@/configs/api/axios-based-query'
import { ICreateTransacaoDto, IFiltroTransacao, IPaginatedResult, ITransacaoBancariaResponseDto } from '@finn/api-contracts'
import { createApi } from '@reduxjs/toolkit/query/react'

const TRANSACAO_URL = '/transacao'

export const transacaoApiSlice = createApi({
    reducerPath: 'transacaoApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['conta-bancaria'],
    endpoints: (builder) => ({
        createTransacao: builder.mutation<void, ICreateTransacaoDto>({
            query: (body) => ({
                method: 'POST',
                url: `${TRANSACAO_URL}`,
                data: body,
            }),
        }),
        updateTransacao: builder.mutation<void, ICreateTransacaoDto>({
            query: (body) => ({
                method: 'PUT',
                url: `${TRANSACAO_URL}`,
                data: body,
            }),
        }),
        getTransacaoByFiltro: builder.query<IPaginatedResult<ITransacaoBancariaResponseDto>, IFiltroTransacao>({
            query: (params) => ({
                method: 'GET',
                url: `${TRANSACAO_URL}`,
                params
            }),
        }),
        getOneTransacao: builder.query<ITransacaoBancariaResponseDto, string>({
            query: (id) => ({
                method: 'GET',
                url: `${TRANSACAO_URL}/${id}`,
            }),
        }),
    }),
})


export const {
    useCreateTransacaoMutation,
    useGetOneTransacaoQuery,
    useGetTransacaoByFiltroQuery,
    useUpdateTransacaoMutation
} = transacaoApiSlice
