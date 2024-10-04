import { DefaultList } from '@/common/components/DefaultList'
import { ContaBancariaListItem } from '@/modules/contas-bancarias/components/ContaBancariaListItem'
import { useFindAllContaBancariaQuery } from '@/modules/contas-bancarias/store/conta-bancaria-api-slice'
import { IContaBancariaResponseDto } from '@finn/api-contracts'
import WalletIcon from '@mui/icons-material/Wallet'
import { Card, CardHeader, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'


export const ListaContasBancariasPage = () => {
    const {isLoading, data} = useFindAllContaBancariaQuery()
    return (
        <Stack gap={2}>
            <Card variant='outlined'>
                <CardHeader
                    title={
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Typography variant='h6'>Minhas contas</Typography>
                            <Button href='criar' variant='text'>Criar nova</Button>
                        </Stack>
                    }
                    avatar={<WalletIcon />}  />
            </Card>

            <DefaultList<IContaBancariaResponseDto>
                data={data || []}
                isLoading={isLoading}
                ItemComponent={(conta) => <ContaBancariaListItem contaBancaria={conta} />}
                getItemKey={item => item.id}
                noResultText='Nenhuma conta bancaria encontrada'
            />
        </Stack>
       
    )
}
