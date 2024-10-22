import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { FormFieldBaseProps } from '@/common/components/form-fields/types'
import { InputAdornment, InputBaseComponentProps, TextField } from '@mui/material'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

type Props<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = FormFieldBaseProps<TFieldValues, TName> & {
    inputProps?: InputBaseComponentProps
    fullWidth?: boolean
}

export default function FormMoneyField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, fullWidth, readOnly }: Props<TFieldValues, TName>) {
    return (
        <Controller<TFieldValues>
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => 
                readOnly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : ( 
                    <NumericFormat
                        customInput={TextField}
                        value={value || ''}
                        onChange={onChange}
                        thousandSeparator='.'
                        decimalSeparator=','
                        decimalScale={2}
                        fixedDecimalScale
                        onBlur={onBlur}
                        error={!!error}
                        helperText={error ? error.message : null}
                        label={label}
                        InputProps={{
                            startAdornment: <InputAdornment position='start'>R$</InputAdornment>
                        }}
                        fullWidth={fullWidth}
                    />
                )}
        />
    )
}
