import { CriarContaBancaria } from '@/modules/contas-bancarias/pages/CriarContaBancaria'
import { DetalhesContaBancaria } from '@/modules/contas-bancarias/pages/DetalhesContaBancaria'
import { EditarContaBancaria } from '@/modules/contas-bancarias/pages/EditarContaBancaria'
import { ListaContasBancariasPage } from '@/modules/contas-bancarias/pages/ListaContasBancariasPage'
import { RouteObject } from 'react-router-dom'

export const CONTAS_BANCARIAS_ROUTES: RouteObject[] = [
    {
        path: '/conta-bancaria',
        element: <ListaContasBancariasPage />
    },
    {
        path: '/conta-bancaria/:id',
        element: <DetalhesContaBancaria />
    },
    {
        path: '/conta-bancaria/:id/editar',
        element: <EditarContaBancaria />
    },
    {
        path: '/conta-bancaria/criar',
        element: <CriarContaBancaria />
    },
]
