import { ContaBancariaForm } from '@/modules/contas-bancarias/components/ContaBancariaForm'
import { useCreateContaBancariaMutation } from '@/modules/contas-bancarias/store/conta-bancaria-api-slice'
import { Box, Card, CardHeader, Typography } from '@mui/material'


export const CriarContaBancaria = () => {
    const [execute, { isLoading }] = useCreateContaBancariaMutation()

    return (
        <Card variant='outlined'>
            <CardHeader title={<Typography variant='h6'>Nova conta bancaria</Typography>}/>
            <Box sx={{ p: 2 }}>
                <ContaBancariaForm
                    isSubmitLoading={isLoading}
                    onSubmit={val => execute({nome: val.nome, saldoInicial: val.saldoInicial})}
                />
            </Box>
        </Card>
    )
}
