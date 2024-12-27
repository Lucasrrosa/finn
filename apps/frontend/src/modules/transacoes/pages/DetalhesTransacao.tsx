import { TransacaoBancariaForm } from '@/modules/transacoes/components/TransacaoBancariaForm'
import { useGetOneTransacaoQuery } from '@/modules/transacoes/store/transacao-api-slice'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export function DetalhesTransacao() {
    const { id } = useParams<{id: string}>()
    const { data } = useGetOneTransacaoQuery(id || '')
    const navigate = useNavigate()

    return (
        <Card variant='outlined'>
            <Stack direction={'row'} gap={2} justifyContent={'space-between'} alignItems={'center'}>

                <Stack direction={'row'} gap={1} justifyContent={'flex-start'} alignItems={'center'}>
                    <IconButton
                        onClick={() => navigate('/conta-bancaria')}
                        size='large'
                    >
                        <ArrowLeftIcon/>
                    </IconButton>
                    <Typography variant='h6'>Detalhes transação</Typography>

                </Stack>
                <Button sx={{px: 2}} variant='text' href='editar'>Editar</Button>
            </Stack>

            <Box sx={{ p: 2 }}>
                {data && 
                    <TransacaoBancariaForm
                        defaultValues={data}
                        readOnly
                    />
                }
            </Box>
        </Card>
    )
}
