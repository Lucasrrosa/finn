import PrivatePage from '@/common/hooks/PrivatePage'
import { LogInPage } from '@/modules/auth/pages/LogInPage'
import { SigninPage } from '@/modules/auth/pages/SigninPage'
import { CONTAS_BANCARIAS_ROUTES } from '@/modules/contas-bancarias/contas-bancarias-routes'
import { MainLayout } from '@/modules/main/pages/MainLayout'
import { TRANSACOES_ROUTES } from '@/modules/transacoes/transacoes-routes'
import { createBrowserRouter } from 'react-router-dom'

export const ROUTES_CONFIG = createBrowserRouter([
    {
        path: '/',
        element: <PrivatePage><MainLayout /></PrivatePage>,
        children: [
            {
                path: '/',
                element: <>Main page</>
            },
            ...CONTAS_BANCARIAS_ROUTES,
            ...TRANSACOES_ROUTES,
            
        ]
    },
    {
        path:'login',
        element: <LogInPage/>
    },
    {
        path:'signin',
        element: <SigninPage/>
    }
])
