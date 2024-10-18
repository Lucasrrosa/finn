import { ContaBancariaForm } from '@/modules/contas-bancarias/components/ContaBancariaForm'
import { useFindOneContaBancariaQuery } from '@/modules/contas-bancarias/store/conta-bancaria-api-slice'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export function DetalhesContaBancaria() {
    const { id } = useParams<{id: string}>()
    const { data } = useFindOneContaBancariaQuery(id || '')
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
                    <Typography variant='h6'>Detalhes conta</Typography>

                </Stack>
                <Button sx={{px: 2}} variant='text' href='editar'>Editar</Button>
            </Stack>

            <Box sx={{ p: 2 }}>
                {data && 
                    <ContaBancariaForm
                        defaultValues={data}
                        readOnly
                    />
                }
            </Box>
        </Card>
    )
}
