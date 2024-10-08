import { axiosBaseQuery } from '@/configs/api/axios-based-query'
import { IContaBancariaResponseDto, ICreateContaBancariaDto } from '@finn/api-contracts'
import { createApi } from '@reduxjs/toolkit/query/react'

const CONTA_BANCARIA_URL = '/conta-bancaria'

export const contaBancariaApiSlice = createApi({
    reducerPath: 'contaBancariaApi',
    baseQuery: axiosBaseQuery(),
    tagTypes: ['conta-bancaria'],
    endpoints: (builder) => ({
        createContaBancaria: builder.mutation<void, ICreateContaBancariaDto>({
            query: (body) => ({
                method: 'POST',
                url: `${CONTA_BANCARIA_URL}`,
                data: body,
            }),
        }),
        findOneContaBancaria: builder.query<string, IContaBancariaResponseDto>({
            query: (id) => ({
                method: 'GET',
                url: `${CONTA_BANCARIA_URL}/${id}`,
            }),
        }),

        findAllContaBancaria: builder.query<IContaBancariaResponseDto[], void>({
            query: () => ({
                method: 'GET',
                url: `${CONTA_BANCARIA_URL}`,
            }),
        }),
    }),
})

export const {
    useCreateContaBancariaMutation,
    useFindOneContaBancariaQuery,
    useFindAllContaBancariaQuery
} = contaBancariaApiSlice
