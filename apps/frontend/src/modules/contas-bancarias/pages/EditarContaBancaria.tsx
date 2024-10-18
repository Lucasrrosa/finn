import { ContaBancariaForm } from '@/modules/contas-bancarias/components/ContaBancariaForm'
import { useFindOneContaBancariaQuery, useUpdateContaBancariaMutation } from '@/modules/contas-bancarias/store/conta-bancaria-api-slice'
import { IUpdateContaBancariaDto } from '@finn/api-contracts'
import { Box, Card, CardHeader, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export const EditarContaBancaria = () => {
    const { id } = useParams<{id: string}>()
    const { data } = useFindOneContaBancariaQuery(id || '')
    const [execute,  submitStatus] = useUpdateContaBancariaMutation()
    const navigate = useNavigate()

    const onSubmitForm = (values: IUpdateContaBancariaDto) => {
        console.log(values)
        execute({ id: id!, nome: values.nome, saldoInicial: values.saldoInicial})
    }

    return (
        <Card variant='outlined'>
            <CardHeader title={<Typography variant='h6'>Editar conta bancaria</Typography>}/>
            <Box sx={{ p: 2 }}>
                {data && 
                    <ContaBancariaForm
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
