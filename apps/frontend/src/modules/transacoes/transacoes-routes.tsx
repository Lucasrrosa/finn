import ListaTransacoes from '@/modules/transacoes/pages/ListaTransacoes'
import { RouteObject } from 'react-router-dom'


export const TRANSACOES_ROUTES: RouteObject[] = [
    {
        path: '/transacoes',
        element: <ListaTransacoes />
    },
    {
        path: '/transacoes/:id',
        element: <>Detalhes transacao</>
    },
]
