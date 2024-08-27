'use client'
import { useIsSmallScreen } from '@/common/hooks/useIsSmallScreen'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
    userName: string
}

const ROUTES = [
    {value:'/', label: 'Home'},
    {value:'/transacoes', label: 'Transações'},
    {value:'/conta-bancaria', label: 'Contas bancárias'},
    {value:'/cartoes', label: 'Cartões'},
]
export default function MainAppBar({userName}: Props) {
    const navigate = useNavigate()
    const location = useLocation()
    const isSmallScreen = useIsSmallScreen()
    return (
        <AppBar position="static" sx={{ gridArea: 'header' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Olá {' '} {userName}
                </Typography>
                {!isSmallScreen && <Stack direction={'row'} gap={2}>
                    {ROUTES.map(({value, label}) => (
                        <Button
                            sx={{
                                color: 'white',
                                borderBottom: location.pathname === value ? '2px solid white' : 'none',
                                borderRadius: 0
                            }}
                            key={value}
                            onClick={() => navigate(value)}
                        >{label}</Button>
                    ))}
                </Stack>}
                

            </Toolbar>
        </AppBar>
    )
}
