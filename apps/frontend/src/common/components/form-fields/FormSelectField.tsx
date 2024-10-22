import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { FormFieldBaseProps, OptionType } from '@/common/components/form-fields/types'
import { Autocomplete, Chip, TextField } from '@mui/material'
import { Controller, FieldPath, FieldValue, FieldValues } from 'react-hook-form'



type Props<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> =
    FormFieldBaseProps<TFieldValues, TName> & {
        options: OptionType<FieldValue<TFieldValues>>[]
        fullWidth?: boolean
        multiple?: boolean
        getOptionLabel: (value: OptionType<FieldValue<TFieldValues>>) => string
    }

export default function FormSelectField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, fullWidth, options, readOnly, multiple, getOptionLabel }: Props<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => 
                readOnly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : (
                    <Autocomplete
                        value={value || (multiple ? [] : null)}
                        onChange={(_, newValue) => {
                            onChange(newValue)
                        }}
                        isOptionEqualToValue={(option, value) => option.value === value.value}
                        onBlur={onBlur}
                        fullWidth={fullWidth}
                        multiple={multiple}
                        options={options || []}
                        renderTags={(tagValue, getTagProps) =>
                            tagValue.map((option, index) => {
                                const { key, ...tagProps } = getTagProps({ index })
                                return (
                                    <Chip
                                        key={key}
                                        label={getOptionLabel(option)}
                                        {...tagProps}
                                    />
                                )
                            })}
                        getOptionLabel={getOptionLabel}
                        renderInput={(params) => <TextField {...params} label={label} error={!!error} helperText={error?.message} />}
                    />
                )}
        />
    )
}
