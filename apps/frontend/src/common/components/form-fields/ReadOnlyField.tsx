import { Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
    label: ReactNode
    value: string
}

export default function ReadOnlyField({ label, value}: Props) {
    return (
        <Stack direction={'column'} gap={1}>
            <Typography gutterBottom={false} variant='body1' fontWeight={500}>{label}</Typography>
            <Typography variant='body2'>{value}</Typography>

        </Stack>
    )
}
