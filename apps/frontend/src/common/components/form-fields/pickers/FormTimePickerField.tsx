import { FormFieldBaseProps } from '@/common/components/types'
import { TimePicker } from '@mui/x-date-pickers'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'


export default function FormTimepickerField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, label }: FormFieldBaseProps<TFieldValues, TName>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TimePicker
                    label={label}
                    value={value}
                    timezone='UTC'
                    onChange={onChange}
                    closeOnSelect
                    ampm={false}
                    ampmInClock={false}
                    format='HH:mm'
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
