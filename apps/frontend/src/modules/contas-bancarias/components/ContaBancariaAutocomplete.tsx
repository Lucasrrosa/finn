import FormSelectField from '@/common/components/form-fields/FormSelectField'
import { FormFieldBaseProps, OptionType } from '@/common/components/form-fields/types'
import { useFindAllContaBancariaQuery } from '@/modules/contas-bancarias/store/conta-bancaria-api-slice'
import { Skeleton } from '@mui/material'
import { FieldPath, FieldValue, FieldValues } from 'react-hook-form'

type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> =
    FormFieldBaseProps<TFieldValues, TName> & {
        fullWidth?: boolean
        multiple?: boolean
    }

export default function ContaBancariaAutocomplete<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, label, name, fullWidth, readOnly, multiple }: Props<TFieldValues, TName>) {
    const { data, isLoading } = useFindAllContaBancariaQuery()

    const options = (data || []).map(item => ({
        ...item,
        id: item.id,
        descricao: item.nome
    }))

    if(isLoading) 
        return <Skeleton variant='rectangular' height={60} />


    return (
        <FormSelectField
            control={control}
            name={name}
            label={label}
            options={options as OptionType<FieldValue<TFieldValues>>}
            fullWidth={fullWidth}
            multiple={multiple}
            readOnly={readOnly}
            getOptionLabel={item => item.descricao}
        />
    )
}
