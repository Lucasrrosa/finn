import { showNotification } from '@/common/utils/notification'
import { TransacaoBancariaForm, TransacaoFormType } from '@/modules/transacoes/components/TransacaoBancariaForm'
import { useCreateTransacaoMutation } from '@/modules/transacoes/store/transacao-api-slice'
import { Box, Card, CardHeader, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const CriarTransacao = () => {
    const [_, {isSuccess, isLoading}] = useCreateTransacaoMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if(isSuccess){
            showNotification('Conta bancaria criada com sucesso', 'success')
            navigate('/conta-bancaria')
        }
    }, [navigate, isSuccess])

    const onsubmitForm = (values: TransacaoFormType) => {
        console.log(values)
    }
    return (
        <Card variant='outlined'>
            <CardHeader title={<Typography variant='h6'>Nova conta bancaria</Typography>}/>
            <Box sx={{ p: 2 }}>
                <TransacaoBancariaForm
                    isSubmitLoading={isLoading}
                    onSubmit={onsubmitForm}
                />
            </Box>
        </Card>
    )
}
