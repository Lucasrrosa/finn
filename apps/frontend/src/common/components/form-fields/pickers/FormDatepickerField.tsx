import { FormDateFieldProps } from '@/common/components/form-fields/pickers/types'
import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'

export default function FormDatepickerField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, readOnly, minDate, maxDate }: FormDateFieldProps<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => 
                readOnly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : (
                    <DatePicker
                        label={label}
                        value={value || null}
                        onChange={onChange}
                        closeOnSelect
                        timezone='UTC'
                        minDate={minDate}
                        maxDate={maxDate}
                        format='DD/MM/YYYY'
                        slotProps={{
                            textField: {
                                error: !!error,
                                helperText: error?.message,
                            },
                        }}
                    />
                )}
        />
    )
}
