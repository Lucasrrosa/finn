import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { FormFieldBaseProps } from '@/common/components/types'
import { Autocomplete, TextField } from '@mui/material'
import { ReactNode } from 'react'
import { Controller, FieldPath, FieldValue, FieldValues } from 'react-hook-form'

type OptionType<T> = T & {
    value: string
    label: ReactNode
}

type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> =
    FormFieldBaseProps<TFieldValues, TName> & {
        options: OptionType<FieldValue<TFieldValues>>[]
        fullWidth?: boolean
    }

export default function FormSelectField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, fullWidth, options, readonly }: Props<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => 
                readonly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : (
                    <Autocomplete
                        value={value || null}
                        onChange={(_, newValue) => {
                            onChange(newValue)
                        }}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        onBlur={onBlur}
                        fullWidth={fullWidth}
                        options={options || []}
                        renderInput={(params) => <TextField {...params} label={label} error={!!error} helperText={error?.message} />}
                    />
                )}
        />
    )
}
