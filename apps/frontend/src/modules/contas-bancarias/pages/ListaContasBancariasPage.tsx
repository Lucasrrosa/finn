import { ContaBancariaListItem } from '@/modules/contas-bancarias/components/ContaBancariaListItem'
import { useFindAllContaBancariaQuery } from '@/modules/contas-bancarias/store/conta-bancaria-api-slice'
import WalletIcon from '@mui/icons-material/Wallet'
import { Box, Button, Card, CardHeader, List, Skeleton, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const ListaContasBancariasPage = () => {
    const {isLoading, data} = useFindAllContaBancariaQuery()
    return (
        <Card variant='outlined'>
            <CardHeader
                title={
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <Typography variant='h6'>Minhas contas</Typography>
                        <Button LinkComponent={Link} href='/conta-bancaria/novo' variant='text'>Criar nova</Button>
                    </Stack>
                }
                avatar={<WalletIcon />}  />
            <List>
                {isLoading && (
                    <Stack p={2} gap={2} width={'100%'}>
                        <Skeleton variant="rectangular" height={60} />
                        <Skeleton variant="rectangular" height={60} />
                        <Skeleton variant="rectangular" height={60} />
                    </Stack>
                )}
                {data?.length === 0 && 
                    <Box p={2} ><Typography variant='body1'>Nenhuma conta bancaria encontrada</Typography></Box>
                }
                {data?.map(conta => (
                    <ContaBancariaListItem contaBancaria={conta} key={conta.id} />
                ))}
            </List>
        </Card>
       
    )
}
