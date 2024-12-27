import { TransacaoBancariaForm, TransacaoFormType } from '@/modules/transacoes/components/TransacaoBancariaForm'
import { useGetOneTransacaoQuery, useUpdateTransacaoMutation } from '@/modules/transacoes/store/transacao-api-slice'
import { Box, Card, CardHeader, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export const EditarTransacao = () => {
    const { id } = useParams<{id: string}>()
    const { data } = useGetOneTransacaoQuery(id || '')
    const [execute,  submitStatus] = useUpdateTransacaoMutation()
    const navigate = useNavigate()

    const onSubmitForm = (values: TransacaoFormType) => {
        console.log(values)
        // execute({ id: id!, nome: values., saldoInicial: values.saldoInicial})
    }

    return (
        <Card variant='outlined'>
            <CardHeader title={<Typography variant='h6'>Editar conta bancaria</Typography>}/>
            <Box sx={{ p: 2 }}>
                {data && 
                    <TransacaoBancariaForm
                        defaultValues={data}
                        onSubmit={onSubmitForm}
                        isSubmitLoading={submitStatus.isLoading}
                        onCancel={() => navigate(`/conta-bancaria/${id}`)}
                    />
                }
            </Box>
        </Card>
    )
}
