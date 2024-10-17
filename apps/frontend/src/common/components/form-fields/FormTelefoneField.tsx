import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { TelefoneField } from '@/common/components/TelefoneField'
import { FormFieldBaseProps } from '@/common/components/types'
import { InputBaseComponentProps } from '@mui/material'
import { HTMLInputTypeAttribute } from 'react'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'

type Props<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = FormFieldBaseProps<TFieldValues, TName> & {
    type?: HTMLInputTypeAttribute
    inputProps?: InputBaseComponentProps
    fullWidth?: boolean
}

export default function FormTelefoneField<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, type, inputProps, fullWidth, readonly }: Props<TFieldValues, TName>) {
    return (
        <Controller<TFieldValues>
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => 
                readonly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : (   
                    <TelefoneField 
                        value={value || ''}
                        onChange={onChange}
                        onBlur={onBlur}
                        error={!!error}
                        helperText={error ? error.message : null}
                        label={label}
                        type={type}
                        inputProps={inputProps}
                        fullWidth={fullWidth}
                    
                    />
        
                )}
        />
    )
}
