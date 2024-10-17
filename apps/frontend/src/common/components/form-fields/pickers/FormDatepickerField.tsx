import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { FormFieldBaseProps } from '@/common/components/types'
import { DatePicker } from '@mui/x-date-pickers'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'

export default function FormDatepickerField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, readonly }: FormFieldBaseProps<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => 
                readonly ? (
                    <ReadOnlyField label={label} value={value} />
                ) : (
                    <DatePicker
                        label={label}
                        value={value}
                        onChange={onChange}
                        closeOnSelect
                        timezone='UTC'
                        format='dd/MM/yyyy'
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
