import FormMoneyField from '@/common/components/form-fields/FormMoneyField'
import FormTextField from '@/common/components/form-fields/FormTextField'
import { numberValidator } from '@/common/validators/number-validator'
import { zodResolver } from '@hookform/resolvers/zod'
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const transacaoFormSchema = z.object({
    descricao: z.string().min(1, 'Campo obrigatório'),
    tipo: z.enum(['DESPESA', 'RECEITA']),
    valor: numberValidator('Campo obrigatório')
})

export type TransacaoFormType = z.infer<typeof transacaoFormSchema>

type Props = {
    onSubmit?: (values: TransacaoFormType) => void
    onCancel?: () => void
    defaultValues?: TransacaoFormType
    isSubmitLoading?: boolean
    readOnly?: boolean
}

export const TransacaoBancariaForm = ({  onSubmit, isSubmitLoading, defaultValues, readOnly, onCancel }: Props) => {
    const { control, handleSubmit, reset } = useForm<TransacaoFormType>({
        defaultValues,
        resolver: zodResolver(transacaoFormSchema)
    })

    const handleCancel = () => {
        reset()
        if(onCancel)
            onCancel()
    }

    

    return (
        <Stack component={'form'} direction={'column'} gap={2}>
            <FormTextField control={control} name={'descricao'} label='Nome da conta' readOnly={readOnly} />
            <FormMoneyField control={control} name={'valor'} label='Saldo inicial' readOnly={readOnly}/>
            {!readOnly &&
                <Stack direction={'row'} justifyContent={'flex-end'} gap={2}>
                    <Button variant={'outlined'} onClick={handleCancel} >Cancelar</Button>
                    <LoadingButton loading={isSubmitLoading} variant='contained' onClick={handleSubmit(onSubmit!, (err) => console.log(err))}>Salvar</LoadingButton>
                </Stack>}
        </Stack>
    )
}
