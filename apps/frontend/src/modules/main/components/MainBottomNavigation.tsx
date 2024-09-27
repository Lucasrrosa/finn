'use client'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

import { useIsSmallScreen } from '@/common/hooks/useIsSmallScreen'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { useLocation, useNavigate } from 'react-router-dom'

export default function MainBottomNavigation() {
    const navigate = useNavigate()
    const location = useLocation()
    const isSmallScreen = useIsSmallScreen()

    if(!isSmallScreen)
        return null

    return (
        <BottomNavigation
            sx={{
                gridArea: 'footer',
            }}
            showLabels
            value={location.pathname}
            onChange={(_, newValue) => {
                navigate(newValue)
            }}
        >
            <BottomNavigationAction value={'/'} label="Home" icon={<AccountBalanceIcon />} />
            <BottomNavigationAction value={'/transacoes'} label="Transações" icon={<ListAltIcon />} />
            <BottomNavigationAction value={'/conta-bancaria'} label="Contas bancárias" icon={<AccountBalanceWalletIcon />} />
            {/* <BottomNavigationAction value={'/cartoes'} label="Cartões" icon={<CreditCardIcon />} /> */}
        </BottomNavigation>
    )
}
