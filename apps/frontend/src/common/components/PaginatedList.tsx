import { Box, Card, List, Skeleton, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

type Props<T> = {
    data: T[]
    ItemComponent: (item: T) => ReactNode
    page: number
    pageSize: number
    total: number
    onChangePage: (value: number) => void
    onChangePageSize: (value: number) => void
    isLoading?: boolean
    noResultText?: string
    getItemKey: (item: T) => string
}

export function PaginatedList<T>(props: Props<T>) {
    return (
        <Card variant='outlined'>
            <List>
                {props.isLoading && (
                    <Stack p={2} gap={2} width={'100%'}>
                        <Skeleton variant="rectangular" height={60} />
                        <Skeleton variant="rectangular" height={60} />
                        <Skeleton variant="rectangular" height={60} />
                    </Stack>
                )}
                {props.data?.length === 0 && 
                        <Box p={2} ><Typography variant='body1'>Nenhuma conta bancaria encontrada</Typography></Box>
                }
                {props.data.map(item => (
                    <props.ItemComponent {...item} key={props.getItemKey(item)}/>
                ))}
            </List>
        </Card>
    )
}