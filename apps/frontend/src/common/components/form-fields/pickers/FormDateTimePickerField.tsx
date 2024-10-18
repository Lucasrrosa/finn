import ReadOnlyField from '@/common/components/form-fields/ReadOnlyField'
import { FormFieldBaseProps } from '@/common/components/types'
import { DateTimePicker } from '@mui/x-date-pickers'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'


export default function FormDateTimepickerField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label, readOnly }: FormFieldBaseProps<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => readOnly ? (
                <ReadOnlyField label={label} value={value} />
            ) : (
                <DateTimePicker
                    label={label}
                    value={value || null}
                    onChange={onChange}
                    closeOnSelect
                    format='DD/MM/YYYY HH:mm'
                    timezone='UTC'
                    ampm={false}
                    ampmInClock={false}
                    minutesStep={5}
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
