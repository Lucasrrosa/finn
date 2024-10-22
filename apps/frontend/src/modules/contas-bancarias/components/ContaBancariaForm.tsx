import FormMoneyField from '@/common/components/form-fields/FormMoneyField'
import FormTextField from '@/common/components/form-fields/FormTextField'
import { numberValidator } from '@/common/validators/number-validator'
import { zodResolver } from '@hookform/resolvers/zod'
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contaBancariaFormSchema = z.object({
    nome: z.string().min(1, 'Campo obrigatório'),
    saldoInicial: numberValidator('Campo obrigatório')
})

type ContaBancariaFormType = z.infer<typeof contaBancariaFormSchema>


type Props = {
    onSubmit?: (values: ContaBancariaFormType) => void
    onCancel?: () => void
    defaultValues?: ContaBancariaFormType
    isSubmitLoading?: boolean
    readOnly?: boolean
}

export const ContaBancariaForm = ({  onSubmit, isSubmitLoading, defaultValues, readOnly, onCancel }: Props) => {

    
    const { control, handleSubmit, reset } = useForm<ContaBancariaFormType>({
        defaultValues,
        resolver: zodResolver(contaBancariaFormSchema)
    })

    const handleCancel = () => {
        reset()
        if(onCancel)
            onCancel()
    }

    

    return (
        <Stack component={'form'} direction={'column'} gap={2}>
            <FormTextField control={control} name={'nome'} label='Nome da conta' readOnly={readOnly} />
            <FormMoneyField control={control} name={'saldoInicial'} label='Saldo inicial' readOnly={readOnly}/>
            {!readOnly &&
                <Stack direction={'row'} justifyContent={'flex-end'} gap={2}>
                    <Button variant={'outlined'} onClick={handleCancel} >Cancelar</Button>
                    <LoadingButton loading={isSubmitLoading} variant='contained' onClick={handleSubmit(onSubmit!, (err) => console.log(err))}>Salvar</LoadingButton>
                </Stack>}
        </Stack>
    )
}

