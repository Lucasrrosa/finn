import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

export default function MainContent({children}: PropsWithChildren) {
    return (
        <Container maxWidth="md" sx={{py: 2}}>
            {children}
        </Container>
    )
}
