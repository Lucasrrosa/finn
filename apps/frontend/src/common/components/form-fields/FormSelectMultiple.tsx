import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { FormFieldBaseProps, OptionType } from '@/common/components/form-fields/types'
import { Autocomplete, TextField } from '@mui/material'
import { Controller, FieldPath, FieldValue, FieldValues } from 'react-hook-form'



type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> =
    FormFieldBaseProps<TFieldValues, TName> & {
        options: OptionType<FieldValue<TFieldValues>>[]
        fullWidth?: boolean
        multiple?: boolean
    }

export default function FormSelectMultipleField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, fullWidth, options, readOnly, multiple }: Props<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => 
                readOnly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : (
                    <Autocomplete
                        value={value || []}
                        onChange={(_, newValue) => {
                            onChange(newValue)
                        }}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        onBlur={onBlur}
                        fullWidth={fullWidth}
                        multiple={multiple}
                        options={options || []}
                        renderInput={(params) => <TextField {...params} label={label} error={!!error} helperText={error?.message} />}
                    />
                )}
        />
    )
}
