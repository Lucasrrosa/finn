import FormTextField from '@/common/components/form-fields/FormTextField'
import { zodResolver } from '@hookform/resolvers/zod'
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contaBancariaFormSchema = z.object({
    nome: z.string().min(1, 'Campo obrigatório'),
    saldoInicial: z.number({ required_error: 'Campo obrigatorio'})
})

type ContaBancariaFormType = z.infer<typeof contaBancariaFormSchema>

type Props = {
    onSubmit: (values: ContaBancariaFormType) => void
    defaultValues?: ContaBancariaFormType
    isSubmitLoading?: boolean
}

export const ContaBancariaForm = ({  onSubmit, isSubmitLoading }: Props) => {

    const { control, handleSubmit, reset } = useForm<ContaBancariaFormType>({
        defaultValues: {
            nome: 'Conta um'
        },
        resolver: zodResolver(contaBancariaFormSchema)
    })
    return (
        <Stack component={'form'} direction={'column'} gap={2}>
            <FormTextField control={control} name={'nome'} label='Nome da conta' readonly />
            <FormTextField control={control} name={'saldoInicial'} label='Saldo inicial'/>
            <Stack direction={'row'} justifyContent={'flex-end'} gap={2}>
                <Button variant={'outlined'} onClick={() => reset()} >Cancelar</Button>
                <LoadingButton loading={isSubmitLoading} variant='contained' onClick={() => handleSubmit(onSubmit)}>Salvar</LoadingButton>
            </Stack>

        </Stack>
    )
}

