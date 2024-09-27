import { ListaContasBancariasPage } from '@/modules/contas-bancarias/pages/ListaContasBancariasPage'
import { RouteObject } from 'react-router-dom'

export const CONTAS_BANCARIAS_ROUTES: RouteObject[] = [
    {
        path: '/conta-bancaria',
        element: <ListaContasBancariasPage />
    },
]
