import { TelefoneField } from '@/common/components/TelefoneField'
import { InputBaseComponentProps } from '@mui/material'
import { HTMLInputTypeAttribute, ReactNode } from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

type Props<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
    control: Control<TFieldValues>
    name: TName
    label: ReactNode
    type?: HTMLInputTypeAttribute
    inputProps?: InputBaseComponentProps
    fullWidth?: boolean
}

export default function FormTelefoneField<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, type, inputProps, fullWidth }: Props<TFieldValues, TName>) {
    return (
        <Controller<TFieldValues>
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (   
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
