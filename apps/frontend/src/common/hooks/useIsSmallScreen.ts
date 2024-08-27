'use client'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const useIsSmallScreen = () => {
    const theme = useTheme()
    const isSmallscreen = useMediaQuery(theme.breakpoints.down('md'))
    return isSmallscreen
}
