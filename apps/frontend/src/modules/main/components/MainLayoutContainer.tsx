'use client'
import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function MainLayoutContainer({children}: PropsWithChildren) {
    return (
        <Box
            sx={theme => ({
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: 'auto 1fr auto',
                gridTemplateAreas: `
                    "header"
                    "main"
                    "footer"
                `,
                [theme.breakpoints.up('md')]: {
                    gridTemplateRows: 'auto 1fr',
                    gridTemplateAreas: `
                        "header"
                        "main"
                    `,
                    
                },
                height: '100vh',
                width: '100vw',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.default
            })}
        >{children}</Box>
    )
}
