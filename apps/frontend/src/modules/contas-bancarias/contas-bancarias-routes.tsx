import { CriarContaBancaria } from '@/modules/contas-bancarias/pages/CriarContaBancaria'
import { ListaContasBancariasPage } from '@/modules/contas-bancarias/pages/ListaContasBancariasPage'
import { RouteObject } from 'react-router-dom'

export const CONTAS_BANCARIAS_ROUTES: RouteObject[] = [
    {
        path: '/conta-bancaria',
        element: <ListaContasBancariasPage />
    },
    {
        path: '/conta-bancaria/criar',
        element: <CriarContaBancaria />
    },
]
