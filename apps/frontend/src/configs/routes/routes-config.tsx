import PrivatePage from '@/common/hooks/PrivatePage'
import { LogInPage } from '@/modules/auth/pages/LogInPage'
import { SigninPage } from '@/modules/auth/pages/SigninPage'
import { ListaContasBancariasPage } from '@/modules/contas-bancarias/pages/ListaContasBancariasPage'
import { MainLayout } from '@/modules/main/pages/MainLayout'
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
            {
                path: '/conta-bancaria',
                element: <ListaContasBancariasPage />
            },
        ]
    },
    {
        path:'login',
        element: <LogInPage/>
    },
    {
        path:'login',
        element: <SigninPage/>
    }
])
