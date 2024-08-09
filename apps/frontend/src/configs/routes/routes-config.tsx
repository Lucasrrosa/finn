import { createBrowserRouter, Outlet } from 'react-router-dom'

export const ROUTES_CONFIG = createBrowserRouter([
    {
        path: '/',
        element: <><h1>Layout</h1> <Outlet /></>,
        children: [
            {
                path: '/',
                element: <>Main page</>
            },
        ]
    },
    {
        path:'login',
        element: <>Login page</>
    }
])
